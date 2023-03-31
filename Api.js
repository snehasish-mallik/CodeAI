const express = require("express")
const path= require('path')
const app = express()
const bodyP = require("body-parser")
const compiler = require("compilex")
const options = { stats: true }
compiler.init(options)
app.use(bodyP.json())

app.use("/css", express.static("C:/Users/sneha/Desktop/CodeAI/css"))
app.use("/script", express.static("C:/Users/sneha/Desktop/CodeAI/script"))
app.use("/images", express.static("C:/Users/sneha/Desktop/CodeAI/images"))
app.use("/codemirror-5.65.9", express.static("C:/Users/sneha/Desktop/CodeAI/codemirror-5.65.9"))
app.use("/views", express.static("C:/Users/sneha/Desktop/CodeAI/views"))

app.set('views',path.join(__dirname,'views'))

app.set('view engine', 'ejs')


app.get("/", function (req, res) {
    res.render('index')
})

app.get("/about", function(req, res){
    res.render('about')
})

app.get("/test", function(req,res){
    res.render('test')
})

app.get("/practice", function(req,res){
    res.render('practice')
})

app.get("/practice-aptitude", function(req,res){
    res.render('practice-aptitude')
})

app.get("/practice-english", function(req,res){
    res.render('practice-english')
})


app.get("/practice-reasoning", function(req,res){
    res.render('practice-reasoning')
})

app.get("/interview", function(req,res){
    res.render('interview')
})

app.get("/java", function(req,res){
    res.render('intjava.ejs')
})
app.get("/python", function(req,res){
    res.render('intpython.ejs')
})

app.get("/database", function(req,res){
    res.render('intdatabase.ejs')
})

app.get("/quant-test", function(req,res){
    res.render('tquant.ejs')
})
app.get("/reasoning-test", function(req,res){
    res.render('treasoning.ejs')
})

app.get("/english-test", function(req,res){
    res.render('tenglish.ejs')
})




app.post("/compile", function (req, res) {
    var code = req.body.code
    var input = req.body.input
    var lang = req.body.lang
    try {

        if (lang == "Cpp") {
            if (!input) {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPP(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
        else if(lang == "C") {
            if (!input) {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPP(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
        
        else if (lang == "Java") {
            if (!input) {
                var envData = { OS: "windows" };
                compiler.compileJava(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                })
            }
            else {
                //if windows  
                var envData = { OS: "windows" };
                //else
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                })
            }
        }
        else if (lang == "Python") {
            if (!input) {
                var envData = { OS: "windows" };
                compiler.compilePython(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                var envData = { OS: "windows" };
                compiler.compilePythonWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
    }
    catch (e) {
        console.log("error")
    }
})

app.listen(8000)
console.log("http://localhost:8000/");