//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class Netflix{
    constructor(showName,trailer,NoOfSeasons,isMovie,isSeason,genre){
        this.showName = showName;
        this.trailer = trailer;
        this.NoOfSeasons = NoOfSeasons;
        this.isMovie = isMovie;
        this.isSeason = isSeason;
        this.genre = genre;


    }
    
}

let strangerthings = new Netflix('strangerThings',true,'5',false,true,"horror")
// console.log(strangerthings)