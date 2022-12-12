
const Ads = require("../models/adsModel")
const Companies = require("../models/companyModel")

const getSearchData = async (req, res) => {

  try {
    const key = req.params.search

    let search = [
      {
        "$lookup": {
          from: 'companies',
          localField: '_id',
          foreignField: '_id',
          as: 'companyAds'
        }
      },
      {
        "$match": {
          "$or": [
            {
              'companyAds.name': { $regex: key, $options: 'i' }
            },
            {
              'primaryText': { $regex: key, $options: 'i' }
            },
            {
              'headline': { $regex: key, $options: 'i' }
            },
            {
              'description': { $regex: key, $options: 'i' }
            },
          ]
        }
      },
      {
        "$unwind": '$companyAds'
      },
      {
        "$project": {
          _id: 1,
          primaryText: 1,
          headline: 1,
          description: 1,
          CTA: 1,
          imageUrl: 1,
          companyName: '$companyAds.name',
        }
      }
    ]
    key.length>0 ?  data = await Ads.aggregate(search) : []

    console.log(data)
    res.json(data);

  } catch (error) {
    console.log(error)
  }
}



module.exports = getSearchData