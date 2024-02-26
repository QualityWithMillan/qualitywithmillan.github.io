# Use the official Jekyll image ( default is latest)
FROM jekyll/jekyll

# Set the working directory to the Jekyll site directory
WORKDIR /srv/jekyll

# Copy the Gemfile and Gemfile.lock into the image
COPY Gemfile Gemfile.lock ./

# Install Jekyll and other dependencies
RUN bundle install

# Expose the default Jekyll port
EXPOSE 4000

# Command to serve the Jekyll site :  "--host", "0.0.0.0" is to make sure your docker can expose it to local machine
CMD ["bundle", "exec", "jekyll", "serve", "--watch", "--incremental", "--host", "0.0.0.0"]

