FROM mongo
ENV MONGO_INITDB_ROOT_USERNAME root
ENV MONGO_INITDB_ROOT_PASSWORD root
ENV MONGO_INITDB_DATABASE whitepeak_db

COPY json /tmp/json
COPY importscript.sh /docker-entrypoint-initdb.d/

ADD init-mongo.js /docker-entrypoint-initdb.d/
