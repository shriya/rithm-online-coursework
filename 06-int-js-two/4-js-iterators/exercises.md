_Link is broken to other exercises_
_So I'm doing [these](https://github.com/rithmschool/javascript_iterators) exercises below:_

# forEach

### 1. Write a function called listNames which takes in an array of songs and console.logs the name of each one.

```
songs.forEach((val,idx,songs) => {
    console.log(songs[idx].name);
});
```

### 2. Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".

```
songs.forEach((val,idx,songs) => {
    console.log(`${songs[idx].name}, by ${songs[idx].artist} (${songs[idx].duration})`);
});
```

### 3. Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

```
function summerJamCount(songs) {
    var count = 0;
    songs.forEach((val,idx,songs) => {
        if(songs[idx].month >= 6 && songs[idx].month <= 8) {
            count++;
        }
    });
    return count;
}

console.log("SUMMER JAM COUNT: " + summerJamCount(songs));
// answer is 47
```

# map

### 1. Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.

```
function getDurations(songs) {
    return songs.map((val,idx,songs) => {
        return songs[idx].duration;
    });
}
```

### 2. Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.

```
function getDurationsInSeconds(songs) {
    return songs.map((val,idx,songs) => {
        var arr = (songs[idx].duration).split(":");
        var mins = parseInt(arr[0]);
        var secs = parseInt(arr[1]);
        return (mins * 60) + secs;
    })
}
```

### 3. Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)

```
function getMainArtists(songs) {
    return songs.map((val,idx,songs) => {
        var primary = songs[idx].artist;
        if ((songs[idx].artist).includes("featuring")) {
            primary = (songs[idx].artist).split(" featuring ")[0];
        }
        return primary;
    })
}
```

# filter

### 1. Write a function called getBigHits which takes an array of songs and returns an array of song objects which were number one for 10 or more weeks.

```
function getBigHits(songs) {
    return songs.filter((val,idx,songs) => {
        return songs[idx].weeksAtNumberOne >= 10;
    })
}
```

### 2. Write a function called getShortSongs which takes an array of songs and returns an array of songs which are shorter than 3 minutes.

```
function getShortSongs(songs) {
    return songs.filter((val,idx,songs) => {
        var arr = (songs[idx].duration).split(":");
        var mins = parseInt(arr[0]);
        var secs = parseInt(arr[1]);
        return ((mins * 60) + secs) < 180;
    })
}
```

### 3. Write a function called getSongsByArtist which takes in an array of songs and the name of an artist and returns an array of songs by that artist.

```
function getSongsByArtist(songs, artist) {
    return songs.filter((val,idx,songs) => {
        return songs[idx].artist === artist;
    })
}
```

### 4. Write a function called getOneHitWonders which takes in an array of songs and returns an array of songs for artists who only appear once in the original array.

```
function getOneHitWonders(songs) {
    return songs.filter((val,idx,songs) => {
        return getSongsByArtist(songs, songs[idx].artist).length === 1;
    })
}
```

# reduce

### 1. Refactor summerJamCount to use reduce!

```
function summerJamCount(songs) {
    return songs.reduce(function(acc,val) {
        if(val.month >= 6 && val.month <= 8) {
            return acc + 1;
        } else {
            return acc + 0;
        } 
    },0);
}
```

### 2. Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)

```
function getTotalDurationInSeconds(songs) {
    return getDurationsInSeconds(songs).reduce((acc,val) => {
        return acc + val;
    });
}
```

### 3. Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.

```
function getSongCountByArtist(songs) {
    return songs.reduce(function(acc,val) {
        if (acc[val.artist]) {
            acc[val.artist] += 1;
            return acc;
        } else {
            acc[val.artist] = 1;
            return acc;
        }
    },{});
}
```

### 4. Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.

```
function averageWeeksAtNumberOne(songs) {
    var total = songs.reduce(function(acc,val) {
        return acc + val.weeksAtNumberOne;
    },0)
    return total / songs.length;
}
```
























