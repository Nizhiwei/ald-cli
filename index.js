#! /usr/bin/env node

const program = require('commander');

program.version(require('./package').version)
	   .description('阿拉丁公司前端脚手架')
// 	// .command('init', '初始化项目模版')
//     // .command('package', '打包资源')
    
// //启动
 program.command('run [folder-name]')
        .alias('r')
        .description('启动开发服务器')
        .action(require('./cmd/run'));

//打包
 program.command('build [folder-name]')
        .alias('b')
        .description('打包项目文件')
        .action(require('./cmd/build'));

//生成模板
 program.command('init [folder-name]')
        .alias('i')
        .description('创建一个新的模板项目')
        .action(require('./cmd/init'));    

program.parse(process.argv)