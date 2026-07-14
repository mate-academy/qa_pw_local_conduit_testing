FROM httpd:2.4

RUN apt-get update \
  && apt-get install -y bash curl unzip \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY .docker/config/apache.conf /usr/local/apache2/conf/demoapache.conf
RUN echo "\nInclude /usr/local/apache2/conf/demoapache.conf" >> /usr/local/apache2/conf/httpd.conf
