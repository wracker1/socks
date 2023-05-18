function FindProxyForURL(url, host) {
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
    if (isInNet(host, "172.18.243.0", "255.255.255.0") || isInNet(host, "172.27.243.0", "255.255.255.0")) {
        // routing STG
        return "SOCKS localhost:8888; DIRECT";
    } else if (isInNet(host, "172.0.0.0", "255.0.0.0") || isInNet(host, "10.0.0.0", "255.0.0.0") || dnsDomainIs(host, ".office365.com")) {
        // routing PRD
        return "SOCKS localhost:7777; DIRECT";
    } else {
        return "DIRECT";
    }
}