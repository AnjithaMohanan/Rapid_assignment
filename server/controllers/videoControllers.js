

 const VideoSchema = require('../models/videoModel');
 
exports.addVideo =  async (req, res) => {
const {title, description} =req.body;
const videoPath = req.file.path;

//console.log(req.file)

const video= new VideoSchema({
    title,
    description,
    filename: req.file.filename,
    videoUrl: videoPath
})

//console.log(video)

try{
    await video.save();
    res.status(200).json({
        message:'Video uploaded successfully ',
        video
        
    })

}catch(error){
    res.status(400).json({
        message:'Vidoe upload failed',
        error
    })

}
}

exports.getAllVideos =async(req,res)=>{
    try{
        const videos= await VideoSchema.find({})
        res.status(200).json({
            videos
        })
    }catch(error){
        res.status(400).json({
            message:'Videos fetch failed',
            error
        })
    }
}
 

