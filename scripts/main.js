//VARIAVEIS
const btn = document.querySelector('.button')

btn.addEventListener('click',function(){start()})

function start(){

    let homeHandicap = document.querySelector('.home-handicap').value
    let sportbookPoints = document.querySelector('.sportbook-points').value
    let awayHandicap = homeHandicap*-1
    let quarterMinutes = document.querySelector('.quarter-minutes').value
    let totalMinutes = quarterMinutes * 4
    let quarter = document.querySelector('.quarter').value
    let minute = document.querySelector('.minute').value
    
    
    //CONTAS
    let divTotalPoints = sportbookPoints / 2
    let betHomeExpectedPoints = Math.round(divTotalPoints + (awayHandicap/2))
    let betAwayExpectedPoints = Math.round(divTotalPoints + (homeHandicap/2))
    let betPointsDifference = betHomeExpectedPoints - betAwayExpectedPoints
    
 
    //let minutesPlayed = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]
    let arrHomePoints = []
    let arrAwayPoints = []
    let minutesPlayed = (quarterMinutes * quarter) - minute

    //HOME
    let homePointsPerMinute = Math.round((betHomeExpectedPoints/totalMinutes)*minutesPlayed)
    arrHomePoints.push(homePointsPerMinute)
    console.log("HOME POINTS: " + homePointsPerMinute)
    //AWAY
    let awayPointsPerMinute = Math.round((betAwayExpectedPoints/totalMinutes)*minutesPlayed)
    arrAwayPoints.push(awayPointsPerMinute)
    console.log("AWAY POINTS: " + awayPointsPerMinute)


    let t1 = Number(arrHomePoints[arrHomePoints.length - 1])
    let t2 = arrAwayPoints[arrAwayPoints.length - 1] 

    let homePoints = Number(document.querySelector('.home-points').value)
    let awayPoints = document.querySelector('.away-points').value

    let diffHome = Number(homePoints - t1)
    let diffAway = Number(awayPoints - t2)
    

    let fairHomeExpectedPoints = Number(betHomeExpectedPoints + diffHome)
    let fairAwayExpectedPoints = Number(betAwayExpectedPoints + diffAway)
    let fairTotalPoints = Number(fairHomeExpectedPoints + fairAwayExpectedPoints)
    let expectedValue = fairTotalPoints - sportbookPoints
    let fairPointsDifference = fairHomeExpectedPoints - fairAwayExpectedPoints
    
    //HTML
    if(expectedValue > 5){
        document.querySelector('.fl-value-bet').innerHTML = "Over"
    }
    else if(expectedValue <=-6){
        document.querySelector('.fl-value-bet').innerHTML = "Under"
    }
    else{
        document.querySelector('.fl-value-bet').innerHTML = "No Expected value"
    }
    // HTML - Sportbook
    document.querySelector('.sb-fs-h').innerHTML = betHomeExpectedPoints
    document.querySelector('.sb-fs-a').innerHTML = betAwayExpectedPoints
    document.querySelector('.sb-total').innerHTML = sportbookPoints
    document.querySelector('.sb-pd').innerHTML = betPointsDifference
    document.querySelector('.sb-ppm').innerHTML = ((betHomeExpectedPoints + betAwayExpectedPoints) / totalMinutes).toFixed(2)
    
   

    // HTML - Fairline
    document.querySelector('.fsh').innerHTML = fairHomeExpectedPoints
    document.querySelector('.fsa').innerHTML = fairAwayExpectedPoints
    document.querySelector('.fpd').innerHTML = fairPointsDifference
    document.querySelector('.ftp').innerHTML = fairTotalPoints
    document.querySelector('.fppm').innerHTML = ((fairHomeExpectedPoints + fairAwayExpectedPoints) / totalMinutes).toFixed(2)

    console.log(expectedValue)
    console.log(totalMinutes)
    console.log(minutesPlayed)
    console.log("---BET365---")
    console.log("Home total points: "+ betHomeExpectedPoints + " Away total points: " + betAwayExpectedPoints)
    console.log("---FAIRLINE---")
    console.log("Home total points: "+ fairHomeExpectedPoints + " Away total points: " + fairAwayExpectedPoints)
    console.log("Home diff: "+ diffHome + " Away diff " + diffAway)
    console.log("exp value: "+ expectedValue)


}