FROM ruby:3.2.0

# Install required dependencies for Jekyll
RUN apt-get update && apt-get install -y build-essential libffi-dev nodejs

# Set the working directory to the Jekyll site directory
WORKDIR /srv/jekyll

# Install Jekyll and Bundler
RUN gem install jekyll bundler

# Add user
RUN adduser --disabled-password dockeruser
RUN chown -R dockeruser:dockeruser /usr/local/bundle

#switch to your user
USER dockeruser

# Copy your Gemfile and Gemfile.lock
COPY --chown=dockeruser Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install

# Install Jekyll and other dependencies
RUN bundle install

# Expose the default Jekyll port
EXPOSE 4000

# Command to serve the Jekyll site :  "--host", "0.0.0.0" is to make sure your docker can expose it to local machine
CMD ["bundle", "exec", "jekyll", "serve", "--watch", "--incremental", "--host", "0.0.0.0"]

