const libyargs = require('yargs')
const libfs = require('fs')

const result = libyargs.options('add',{
        alias : 'add',
        type : "string",
        description : "add a new name"
    }
  ).options('remove',{
        alias : 'remove',
        type : "string",
        description : "add a new name"

  }).options('update',{
    alias : 'update',
    type : "string",
    description : "Update New Name"

    }
  ).help().argv

if(result.add!=undefined){

    libfs.appendFile("sample.txt",result.add + '\n',(error)=>{
        if(error){
            console.log("Failed to write")
        }
        else{
            console.log("done");
        }
    })

}

if(result.remove!=undefined)
    {
        libfs.readFile("sample.txt","utf8",(error,data)=>{
            if(error)
                {
                    console.log("failed to read file:",error)
                }
                else{

                    const newdata = data.replace(result.remove,"")
                    libfs.writeFile("sample.txt",newdata,(error)=>{
                        if(error){
                            console.log(error)
                        }
                        else{console.log("delete")}
                    })

                }
        })
    }
    if(result.update!=undefined)
        {
            libfs.readFile("sample.txt","utf8",(error,data)=>{
                if(error)
                    {
                        console.log(error)
                    }
                    else{
                        
                        const newString = data.replace(result.update,result.new);

                        libfs.writeFile("sample.txt",newString,(error)=>{
                            if(error){
                                console.log(error)
                            }
                            else{
                                console.log("updated")
                            }
                        })

                    }
            })
        }