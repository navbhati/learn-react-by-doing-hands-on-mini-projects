const rapidApiHost = "coronavirus-monitor.p.rapidapi.com"
const rapidApiKey = "b6e827b151mshbf3ff40340792ccp1da0ccjsne226ad04c043"
const overallUrl = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php'
const casesByCountryUrl = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php"

export const fetchOverallData = async () => {
    try {
        const data = await fetch(overallUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": rapidApiHost,
                "x-rapidapi-key": rapidApiKey
            }
        }).then(r => r.json())
        // console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountriesData = async () => {
    //const data1 = [{ country_name: "A", region: "", cases: "1", new_deaths: "44", deaths: "3", serious_critical: "1", active_cases: "566", total_recovered: "56", total_cases_per_1m_population: "33" }, { country_name: "B", region: "", cases: "2", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "56", total_cases_per_1m_population: "33" }, { country_name: "C", region: "", cases: "3", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "86", total_cases_per_1m_population: "33" }, { country_name: "D", region: "", cases: "4", new_deaths: "44", deaths: "3", serious_critical: "233", active_cases: "566", total_recovered: "86", total_cases_per_1m_population: "33" }]
    try {
        const data = await fetch(casesByCountryUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": rapidApiHost,
                "x-rapidapi-key": rapidApiKey
            }
        }).then(r => r.json())
        
        // deleting the empty data object
        delete data.countries_stat[0];
        
        return data
    } catch (error) {
        console.log(error);
    }
}

/*
Overall Data Sample -
total_cases: "3,326,005"
new_cases: "21,785"
total_deaths: "234,505"
new_deaths: "675"
total_recovered: "1,052,180"
active_cases: "2,039,320"
serious_critical: "50,845"
total_cases_per_1m_population: "427"
deaths_per_1m_population: "30.1"
statistic_taken_at: "2020-05-01 12:06:01"

----

{
    total_cases,
    new_cases,
    total_deaths,
    new_deaths,
    total_recovered,
    active_cases,
    serious_critical,
    total_cases_per_1m_population,
    deaths_per_1m_population,
    statistic_taken_at
}

*/