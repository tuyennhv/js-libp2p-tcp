import type { Socket } from 'net';
import type { Multiaddr } from '@multiformats/multiaddr';
import type { MultiaddrConnection } from '@libp2p/interface-connection';
import type { CounterGroup } from '@libp2p/interface-metrics';
interface ToConnectionOptions {
    listening?: {
        addr: Multiaddr;
        onUnixPath: boolean;
    };
    remoteAddr?: Multiaddr;
    localAddr?: Multiaddr;
    socketInactivityTimeout?: number;
    socketCloseTimeout?: number;
    metrics?: CounterGroup;
    metricPrefix?: string;
}
/**
 * Convert a socket into a MultiaddrConnection
 * https://github.com/libp2p/interface-transport#multiaddrconnection
 */
export declare const toMultiaddrConnection: (socket: Socket, options: ToConnectionOptions) => MultiaddrConnection;
export {};
//# sourceMappingURL=socket-to-conn.d.ts.map