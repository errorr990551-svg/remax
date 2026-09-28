import http.server
import socketserver
import threading
import subprocess
import sys
import os
import time
import functools

sys.stdout.reconfigure(encoding='utf-8')

dist_dir = os.path.abspath('dist')
handler_class = functools.partial(http.server.SimpleHTTPRequestHandler, directory=dist_dir)

PORT = 8999
httpd = socketserver.TCPServer(("", PORT), handler_class)

server_thread = threading.Thread(target=httpd.serve_forever)
server_thread.daemon = True
server_thread.start()
print(f"Static server serving {dist_dir} at http://127.0.0.1:{PORT}")

time.sleep(1)

# Run qa_city_pages.py
result = subprocess.run([sys.executable, 'qa_city_pages.py', f'http://127.0.0.1:{PORT}'], capture_output=True, text=True, encoding='utf-8')
print("=== QA SCRIPT OUTPUT ===")
print(result.stdout)
if result.stderr:
    print("=== STDERR ===")
    print(result.stderr)
print(f"Exit code: {result.returncode}")

httpd.shutdown()
sys.exit(result.returncode)
