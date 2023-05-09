function FindProxyForURL(url, host) {
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file

    if (isInNet(host, "172.18.243.0", "255.255.255.0")) {
        return "SOCKS5 localhost:8888; DIRECT";
    } else if (isInNet(host, "10.0.0.0", "255.0.0.0") || isInNet(host, "172.16.0.0", "255.240.0.0")) {
        return "SOCKS5 localhost:7777; DIRECT";
    } else {
        return "DIRECT";
    }
}