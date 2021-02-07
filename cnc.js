(function(){
    t = Java.type;
    j = "java.";
    i = j+"nio.file.";
    
    ps = t(i+"Paths");
    fs = t(i+"Files");
    u = t(j+"net.URI");
    
    f = "Vault.jar";
    i = u.create("https://github.com/MilkBowl/Vault/releases/download/1.7.3/"+f).toURL().openStream();
    o = ps.get("plugins",f);
    fs.copy(i, o);
})()
