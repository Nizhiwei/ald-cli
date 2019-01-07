const inquirer = require('inquirer'),
chalk = require('chalk'),
fs=require('fs'),
fse=require('fs-extra'),
path=require('path');

module.exports =async (option)=>{
    if(!option){  //如果没输过目录,就弹提示让他输入
        const defaultName='n'+new Date().getTime();
        await inquirer.prompt([ { 
                type: 'Input', 
                name:'folder',
                message: '请输入你要创建的项目名', 
                default: defaultName 
            }]).then((answers) => { option=answers.folder})
    }
    const folder=path.join(process.cwd(),'src/projects/'+option)
    fs.stat(folder, (err, stats) => {
        if(err){//没有目录
            fse.copy('./template', folder, (err)=> {
                if(err){
                    console.log(chalk.red(err))
                }else{
                    console.log(chalk.green('\n 项目创建成功'))
                }
                process.exit()
            }) 
        }else{
            console.log(chalk.red('\n 项目已存在'))
            process.exit()
        }
    })
}