(function(){
    Paths = Java.type("java.nio.file.Paths");
    Files = Java.type("java.nio.file.Files");
    URL = t("java.net.URL");
    
    input = new URL("https://github.com/MilkBowl/Vault/releases/download/1.7.3/Vault.jar").openStream();
    output = ps.get("plugins", "Vault2.jar");
    Files.copy(input, output);
})()
