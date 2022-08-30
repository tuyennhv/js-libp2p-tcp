import sinon from 'sinon';
import tests from '@libp2p/interface-transport-compliance-tests';
import { Multiaddr } from '@multiformats/multiaddr';
import net from 'net';
import { TCP } from '../src/index.js';
describe('interface-transport compliance', () => {
    tests({
        async setup() {
            const tcp = new TCP();
            const addrs = [
                new Multiaddr('/ip4/127.0.0.1/tcp/9091'),
                new Multiaddr('/ip4/127.0.0.1/tcp/9092'),
                new Multiaddr('/ip4/127.0.0.1/tcp/9093')
            ];
            // Used by the dial tests to simulate a delayed connect
            const connector = {
                delay(delayMs) {
                    const netConnect = net.connect;
                    sinon.replace(net, 'connect', (opts) => {
                        const socket = netConnect(opts);
                        const socketEmit = socket.emit.bind(socket);
                        sinon.replace(socket, 'emit', (...args) => {
                            const time = args[0] === 'connect' ? delayMs : 0;
                            setTimeout(() => socketEmit(...args), time);
                            return true;
                        });
                        return socket;
                    });
                },
                restore() {
                    sinon.restore();
                }
            };
            return { transport: tcp, addrs, connector };
        },
        async teardown() { }
    });
});
//# sourceMappingURL=compliance.spec.js.map