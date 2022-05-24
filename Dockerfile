FROM ruby:3.1.2

ENV BUNDLER_VERSION=2.3.10

RUN mkdir /react_on_rails
WORKDIR /react_on_rails
COPY /Gemfile /react_on_rails/Gemfile
COPY /Gemfile.lock /react_on_rails/Gemfile.lock
RUN gem install bundler -v ${BUNDLER_VERSION} \
    && bundle config --local set path 'vendor/bundle' \ 
    && bundle install
COPY . /react_on_rails

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]