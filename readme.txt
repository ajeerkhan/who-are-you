# Getting ip address of the request
https://github.com/pbojinov/request-ip 

How It Works
X-Client-IP
X-Forwarded-For (Header may return multiple IP addresses in the format: "client IP, proxy 1 IP, proxy 2 IP", so we take the first one.)
CF-Connecting-IP (Cloudflare)
Fastly-Client-Ip (Fastly CDN and Firebase hosting header when forwared to a cloud function)
True-Client-Ip (Akamai and Cloudflare)
X-Real-IP (Nginx proxy/FastCGI)
X-Cluster-Client-IP (Rackspace LB, Riverbed Stingray)
X-Forwarded, Forwarded-For and Forwarded (Variations of #2)
appengine-user-ip (Google App Engine)
req.connection.remoteAddress
req.socket.remoteAddress
req.connection.socket.remoteAddress
req.info.remoteAddress
Cf-Pseudo-IPv4 (Cloudflare fallback)
request.raw (Fastify)

If an IP address cannot be found, it will return null.


# Ip to location mapping
 Maxmind geolite db is being used, to get the location of a request.

 Two node js implementation

 * slow startup, faster read https://github.com/geoip-lite/node-geoip/ *

 * faster startup, slow read https://github.com/onramper/fast-geoip/ *