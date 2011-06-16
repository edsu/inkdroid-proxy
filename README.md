This is a simple proxy server written in node.js which is used on inkdroid.org.
Rather than run it as root (so node can bind to port 80) I rewrite port 80 
tcp traffic to go to port 8000 instead, where this proxy is running as www-data.

    iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000

If you need to remove the iptables rule view the rules:

    iptables -t nat -L -n -v

and then use the index of the rule to delete it:

    iptables -t nat -D PREROUTING RULE_INDEX_HERE

Also included is an upstart script you can drop into /etc/init/ to start/stop
the proxy server

    inkdroid-proxy.conf
