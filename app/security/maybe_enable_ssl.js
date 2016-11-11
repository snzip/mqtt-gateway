var cert = process.env.SSL_CERT;
var key = process.env.SSL_KEY;
var sslPort = process.env.SSL_PORT || 443;

module.exports = function maybeEnableSSL(config) {
  if (cert && key ) {
    config.secure = {
      port: sslPort,
      keyPath: key,
      certPath: cert,
    }
  } else {
      console.log(`
      ==========================================================================
      WARNING: No SSL certificate infomation found in SSL_KEY and SSL_CERT.
      This will not prevent the MQTT server from running, but all messages will
      be sent unecrypted.
      ==========================================================================
      `);
  }
}
