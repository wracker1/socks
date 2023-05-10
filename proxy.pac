function FindProxyForURL(url, host) {
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
    if (isInNet(host, "172.18.243.0", "255.255.255.0")) {
        return "SOCKS localhost:8888";
    } else if (isInNet(host, "172.0.0.0", "255.0.0.0") || isInNet(host, "10.0.0.0", "255.0.0.0")) {
        return "SOCKS localhost:7777";
    }

    return "DIRECT";
}