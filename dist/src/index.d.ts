import { CloseServerOnMaxConnectionsOpts } from './listener.js';
import { CreateListenerOptions, DialOptions, Transport } from '@libp2p/interface-transport';
import type { AbortOptions } from '@multiformats/multiaddr';
import type { CounterGroup, Metrics } from '@libp2p/interface-metrics';
export interface TCPOptions {
    /**
     * An optional number in ms that is used as an inactivity timeout after which the socket will be closed
     */
    inboundSocketInactivityTimeout?: number;
    /**
     * An optional number in ms that is used as an inactivity timeout after which the socket will be closed
     */
    outboundSocketInactivityTimeout?: number;
    /**
     * When closing a socket, wait this long for it to close gracefully before it is closed more forcibly
     */
    socketCloseTimeout?: number;
    /**
     * Set this property to reject connections when the server's connection count gets high.
     * https://nodejs.org/api/net.html#servermaxconnections
     */
    maxConnections?: number;
    /**
     * Parameter to specify the maximum length of the queue of pending connections
     * https://nodejs.org/dist/latest-v18.x/docs/api/net.html#serverlisten
     */
    backlog?: number;
    /**
     * Close server (stop listening for new connections) if connections exceed a limit.
     * Open server (start listening for new connections) if connections fall below a limit.
     */
    closeServerOnMaxConnections?: CloseServerOnMaxConnectionsOpts;
}
/**
 * Expose a subset of net.connect options
 */
export interface TCPSocketOptions extends AbortOptions {
    noDelay?: boolean;
    keepAlive?: boolean;
    keepAliveInitialDelay?: number;
    allowHalfOpen?: boolean;
}
export interface TCPDialOptions extends DialOptions, TCPSocketOptions {
}
export interface TCPCreateListenerOptions extends CreateListenerOptions, TCPSocketOptions {
}
export interface TCPComponents {
    metrics?: Metrics;
}
export interface TCPMetrics {
    dialerEvents: CounterGroup;
}
export declare function tcp(init?: TCPOptions): (components?: TCPComponents) => Transport;
//# sourceMappingURL=index.d.ts.map