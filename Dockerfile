FROM ruby:3.2.0

# Install required dependencies for Jekyll (build-essential and libffi-dev are pre-installed in base ruby image) and clean up apt cache
RUN apt-get update && apt-get install -y nodejs && rm -rf /var/lib/apt/lists/*

# Set the working directory to the Jekyll site directory
WORKDIR /srv/jekyll

# Add user
RUN adduser --disabled-password dockeruser

# Copy your Gemfile and Gemfile.lock (lockfile is optional)
COPY Gemfile Gemfile.lock* ./

# Install dependencies in parallel as root to avoid permission/write errors
RUN bundle config set jobs $(nproc) && bundle install

# Grant ownership of the working directory to dockeruser (gems are already world-readable)
RUN chown -R dockeruser:dockeruser /srv/jekyll

# Switch to non-root user for runtime safety
USER dockeruser

# Expose the default Jekyll port
EXPOSE 4000

# Command to serve the Jekyll site
CMD ["bundle", "exec", "jekyll", "serve", "--watch", "--incremental", "--host", "0.0.0.0"]

