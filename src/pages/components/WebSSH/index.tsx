import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

import { THEME } from './constant';
import 'xterm/css/xterm.css';
import './index.css';

function WebSSH() {
  const termRef = useRef<HTMLDivElement>(document.createElement('div'));
  const term = new Terminal({
    cursorStyle: 'block',
    cursorBlink: true,
    bellStyle: 'sound',
    theme: THEME,
    fontFamily: '"Cascadia Code", Menlo, monospace',
  });
  const fitAddon = new FitAddon();
  useEffect(() => {
    term.loadAddon(fitAddon);
    term.open(termRef.current);
    term.write(`     _       __     __                        
\r    | |     / /__  / /________  ____ ___  ___ 
\r    | | /| / / _ \\/ / ___/ __ \\/ __ ·__ \\/ _ \\
\r    | |/ |/ /  __/ / /__/ /_/ / / / / / /  __/
\r    |__/|__/\\___/_/\\___/\\____/_/ /_/ /_/\\___/ \n\r`);
    fitAddon.fit();
  }, []);
  window.addEventListener('resize', () => {
    fitAddon.fit();
  });
  return (
    <div id="terminal" ref={termRef} style={{ height: '100vh' }}></div>
  );
}

export default WebSSH;