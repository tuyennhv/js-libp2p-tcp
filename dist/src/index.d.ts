/// <reference types="node" />
import net from 'net';
import { CreateListenerOptions, DialOptions, symbol, Transport } from '@libp2p/interface-transport';
import type { Multiaddr } from '@multiformats/multiaddr';
import type { AbortOptions } from '@libp2p/interfaces';
import type { Connection } from '@libp2p/interface-connection';
export declare class TCP implements Transport {
    get [symbol](): true;
    get [Symbol.toStringTag](): string;
    dial(ma: Multiaddr, options: DialOptions): Promise<Connection>;
    _connect(ma: Multiaddr, options?: AbortOptions): Promise<net.Socket>;
    /**
     * Creates a TCP listener. The provided `handler` function will be called
     * anytime a new incoming Connection has been successfully upgraded via
     * `upgrader.upgradeInbound`.
     */
    createListener(options: CreateListenerOptions): import("@libp2p/interface-transport").Listener;
    /**
     * Takes a list of `Multiaddr`s and returns only valid TCP addresses
     */
    filter(multiaddrs: Multiaddr[]): Multiaddr[];
}
//# sourceMappingURL=index.d.ts.map