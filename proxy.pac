function FindProxyForURL(url, host) {
	//https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
    // if (dnsDomainIs(host, "172.18.171.25")) {
    //     return "SOCKS localhost:7777";
    // }
    
    // return "DIRECT";
    return "SOCKS localhost:7777";
}