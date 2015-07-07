package ru.koluch;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.*;
import java.net.InetSocketAddress;

public class StaticServer {

    public static void main(String[] args) throws Exception {
        int port = 8000;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/", new StaticHandler());
        server.setExecutor(null); // creates a default executor
        server.start();
        System.out.println("Running server on port " + port + "...");
    }

    static class StaticHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            String uri = t.getRequestURI().getPath();
            if(uri.endsWith("/")) uri += "/index.html";


            try (OutputStream output = t.getResponseBody()) {
                try (FileInputStream fileInput = new FileInputStream(new File("." + uri))) {

                    int read;
                    byte[] buf = new byte[1000];

                    ByteArrayOutputStream baos = new ByteArrayOutputStream();
                    while ((read = fileInput.read(buf)) != -1) {
                        baos.write(buf, 0, read);
                    }

                    byte[] bytes = baos.toByteArray();
                    t.sendResponseHeaders(200, bytes.length);
                    output.write(bytes);
                } catch (FileNotFoundException e) {
                    System.out.println("File not found: " + uri);
                    t.sendResponseHeaders(404, 0);
                } catch (Exception e) {
                    e.printStackTrace();
                    t.sendResponseHeaders(500, 0);
                }
            }

        }
    }
}
