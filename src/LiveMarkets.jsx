function LiveMarkets(){

    return(
        <table className="live">
            <tr>
            <div className="sideBar">
                <label for="fromDate">From:</label>
                <input type="date" id="fromDate"></input>
                <label for="toDate">To:</label>
                <input type="date" id="toDate"></input>
            <fieldset>
                <div class="time-range">

                    <input type="radio" id="Today" name="time-range" value="today"></input>
                    <label for="Today">Today</label>

                    <input type="radio" id="1month" name="time-range" value="1month"></input>
                    <label for="1month">1 Month</label>

                    <input type="radio" id="3months" name="time-range" value="3months"></input>
                    <label for="3months">3 Months</label>

                    <input type="radio" id="6months" name="time-range" value="6months"></input>
                    <label for="6months">6 Months</label>

                    <input type="radio" id="ytd" name="time-range" value="ytd"></input>
                    <label for="ytd">Year to Date</label>
                </div>
            </fieldset>

            <fieldset>
            
                <div>
                    <input type="checkbox" id="spg" name="spg" />
                    <label for="spg">Share Price Graph</label>
                </div>

                <div>
                    <input type="checkbox" id="volume" name="volume" />
                    <label for="volume">Volume Graph</label>
                </div>

                <label for="graphsNumber">Graphs:</label>
                <input type="number" id="graphsNumber" name="graphsNumber" min="1" max="100" />

            </fieldset>
            
            </div>
            <div className="graphs">
                <div className="graph">
                <p>graph 1</p>
                </div>
                <div className="graph">
                <p>graph 2</p>
                </div>
            </div>
            </tr>
        </table>
        
    );
}

export default LiveMarkets;