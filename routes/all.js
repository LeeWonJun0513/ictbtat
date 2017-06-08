// module.exports 는 모듈을 생성하는 부분으로 다른 파일에서 require 할 수 있다.
module.exports = function(app, fs)
{

     app.get('/',function(req,res){
         res.render('main', {
             length: 10
         })
     });

     app.get('/main',function(req,res){
         res.render('main', {
             length: 10
         })
     });

     app.get('/profile',function(req,res){
         res.render('profile', {
             length: 10
         })
     });
  
    app.get('/daumapi',function(req,res){
        res.render('daumapi', {
            length: 10
        });
    })
    
    app.get('/daum_map_api',function(req,res){
        res.render('daum_map_api', {
            length: 10
        });
    })
    
    app.get('/bye',function(req,res){
        res.render('bye', {
            length: 10
        });
    })
}
