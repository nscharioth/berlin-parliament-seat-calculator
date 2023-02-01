"use strict"

// 0 Set-up - run the code when the page loads and when someone clicks
document.addEventListener("DOMContentLoaded", () => {
    let events = ["load", "click"]
    for (let evt of events) {
        let action = evt
        addEventListener(action, () => {

// 0.1 Set various working variables to 0
            const ParliamentNormSize = 130
            let ParliamentSize = [130]
            let SecondaryVotesTotal = 0
            let SecondaryVotesTotalPlusOthers = 0
            let SeatsEstimatesTotal = 0
            let SeatsEstimatesTotal2 = 0
            let SeatsWonDirectlyTotal = 0
            let SeatsWonDirectly_01_Total = 0
            let SeatsWonDirectly_02_Total = 0
            let SeatsWonDirectly_03_Total = 0
            let SeatsWonDirectly_04_Total = 0
            let SeatsWonDirectly_05_Total = 0
            let SeatsWonDirectly_06_Total = 0
            let SeatsWonDirectly_07_Total = 0
            let SeatsWonDirectly_08_Total = 0
            let SeatsWonDirectly_09_Total = 0
            let SeatsWonDirectly_10_Total = 0
            let SeatsWonDirectly_11_Total = 0
            let SeatsWonDirectly_12_Total = 0
            let OverhangSeatsTotal = 0
            let ListSeatsTotal = 0
            let ListSeats_01_Total = 0
            let ListSeats_02_Total = 0
            let ListSeats_03_Total = 0
            let ListSeats_04_Total = 0
            let ListSeats_05_Total = 0
            let ListSeats_06_Total = 0
            let ListSeats_07_Total = 0
            let ListSeats_08_Total = 0
            let ListSeats_09_Total = 0
            let ListSeats_10_Total = 0
            let ListSeats_11_Total = 0
            let ListSeats_12_Total = 0
            let CompensationSeatsTotal = 0
            let SortingArray1 = []
            let SortingArray2 = []
            let SortingArray3 = []
            let SortingArray4 = []
            let data = {}

// 0.2 Booleans initiatlly set to existing situation then checking for updates    
            let spd_districtlist_boolean = true
            const spd_districtlist = document.getElementById("spd-districtlist")
            const spd_landlist = document.getElementById("spd-landlist")
            if (spd_districtlist.checked) {
                spd_districtlist_boolean = true
            }
            else if (spd_landlist.checked) {
                spd_districtlist_boolean = false
            }

            let cdu_districtlist_boolean = true
            const cdu_districtlist = document.getElementById("cdu-districtlist")
            const cdu_landlist = document.getElementById("cdu-landlist")
            if (cdu_districtlist.checked) {
                cdu_districtlist_boolean = true
            }
            else if (cdu_landlist.checked) {
                cdu_districtlist_boolean = false
            }

            let gruene_districtlist_boolean = false
            const gruene_districtlist = document.getElementById("gruene-districtlist")
            const gruene_landlist = document.getElementById("gruene-landlist")
            if (gruene_districtlist.checked) {
                gruene_districtlist_boolean = true
            }
            else if (gruene_landlist.checked) {
                gruene_districtlist_boolean = false
            }

            let linke_districtlist_boolean = false
            const linke_districtlist = document.getElementById("linke-districtlist")
            const linke_landlist = document.getElementById("linke-landlist")
            if (linke_districtlist.checked) {
                linke_districtlist_boolean = true
            }
            else if (linke_landlist.checked) {
                linke_districtlist_boolean = false
            }

            let afd_districtlist_boolean = false
            const afd_districtlist = document.getElementById("afd-districtlist")
            const afd_landlist = document.getElementById("afd-landlist")
            if (afd_districtlist.checked) {
                afd_districtlist_boolean = true
            }
            else if (afd_landlist.checked) {
                afd_districtlist_boolean = false
            }

            let fdp_districtlist_boolean = true
            const fdp_districtlist = document.getElementById("fdp-districtlist")
            const fdp_landlist = document.getElementById("fdp-landlist")
            if (fdp_districtlist.checked) {
                fdp_districtlist_boolean = true
            }
            else if (fdp_landlist.checked) {
                fdp_districtlist_boolean = false
            }

            let piraten_districtlist_boolean = false
            const piraten_districtlist = document.getElementById("piraten-districtlist")
            const piraten_landlist = document.getElementById("piraten-landlist")
            if (piraten_districtlist.checked) {
                piraten_districtlist_boolean = true
            }
            else if (piraten_landlist.checked) {
                piraten_districtlist_boolean = false
            }

// 0.3 Set-up of the party array with initial 0 values for later use as well as set up HTML connections          
            let Parties = [
                {Partyname: "SPD", FivePercentThreshold: true, Districtlist: spd_districtlist_boolean, ListSeats: 0, OverhangSeats: 0, SecondaryVotePercentageHTML: (document.getElementById("spd-secondary-vote-percentage")), SeatsWonDirectlyHTML: (document.getElementById("spd-seats-won-directly")), ListSeatsHTML: (document.getElementById("spd-list-seats")), SeatsAllocatedHTML: (document.getElementById("spd-seats-allocated")), SeatsAllocated2HTML: (document.getElementById("spd-seats-allocated2")), CompensationSeats: 0, CompensationSeatsHTML: (document.getElementById("spd-compensation-seats")), OverhangSeatsHTML: (document.getElementById("spd-overhang-seats")), DistrictSeatsEstimatesTotal: 0, DistrictSeatsEstimatesTotal2: 0, LargestParliamentSizeEstimate: false, Array1: [], Array2: [], Array3: [], Array4: [],
                Districtdata: [
                    {DistrictNumber: "01", DistrictName: "Mitte", SeatsWonDirectlyHTML: (document.getElementById("spd-01-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-01-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-01-total-seats"))},
                    {DistrictNumber: "02", DistrictName: "Friedrichshain-Kreuzberg", SeatsWonDirectlyHTML: (document.getElementById("spd-02-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-02-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-02-total-seats"))},
                    {DistrictNumber: "03", DistrictName: "Pankow", SeatsWonDirectlyHTML: (document.getElementById("spd-03-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-03-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-03-total-seats"))},
                    {DistrictNumber: "04", DistrictName: "Charlottenburg-Wilmersdorf", SeatsWonDirectlyHTML: (document.getElementById("spd-04-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-04-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-04-total-seats"))},
                    {DistrictNumber: "05", DistrictName: "Spandau", SeatsWonDirectlyHTML: (document.getElementById("spd-05-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-05-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-05-total-seats"))},
                    {DistrictNumber: "06", DistrictName: "Steglitz-Zehlendorf", SeatsWonDirectlyHTML: (document.getElementById("spd-06-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-06-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-06-total-seats"))},
                    {DistrictNumber: "07", DistrictName: "Tempelhof-Schöneberg", SeatsWonDirectlyHTML: (document.getElementById("spd-07-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-07-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-07-total-seats"))},
                    {DistrictNumber: "08", DistrictName: "Neukölln", SeatsWonDirectlyHTML: (document.getElementById("spd-08-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-08-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-08-total-seats"))},
                    {DistrictNumber: "09", DistrictName: "Treptow-Köpenick", SeatsWonDirectlyHTML: (document.getElementById("spd-09-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-09-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-09-total-seats"))},
                    {DistrictNumber: "10", DistrictName: "Marzahn-Hellersdorf", SeatsWonDirectlyHTML: (document.getElementById("spd-10-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-10-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-10-total-seats"))},
                    {DistrictNumber: "11", DistrictName: "Lichtenberg", SeatsWonDirectlyHTML: (document.getElementById("spd-11-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-11-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-11-total-seats"))},
                    {DistrictNumber: "12", DistrictName: "Reinickendorf", SeatsWonDirectlyHTML: (document.getElementById("spd-12-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("spd-12-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("spd-12-total-seats"))},
                    ],},
            {Partyname: "CDU", FivePercentThreshold: true, Districtlist: cdu_districtlist_boolean, ListSeats: 0, OverhangSeats: 0, SecondaryVotePercentageHTML: (document.getElementById("cdu-secondary-vote-percentage")), SeatsWonDirectlyHTML: (document.getElementById("cdu-seats-won-directly")), ListSeatsHTML: (document.getElementById("cdu-list-seats")), SeatsAllocatedHTML: (document.getElementById("cdu-seats-allocated")), SeatsAllocated2HTML: (document.getElementById("cdu-seats-allocated2")), CompensationSeats: 0, CompensationSeatsHTML: (document.getElementById("cdu-compensation-seats")), OverhangSeatsHTML: (document.getElementById("cdu-overhang-seats")), DistrictSeatsEstimatesTotal: 0, DistrictSeatsEstimatesTotal2: 0, LargestParliamentSizeEstimate: false, Array1: [], Array2: [], Array3: [], Array4: [],
            Districtdata: [
                    {DistrictNumber: "01", DistrictName: "Mitte", SeatsWonDirectlyHTML: (document.getElementById("cdu-01-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-01-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-01-total-seats"))},
                    {DistrictNumber: "02", DistrictName: "Friedrichshain-Kreuzberg", SeatsWonDirectlyHTML: (document.getElementById("cdu-02-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-02-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-02-total-seats"))},
                    {DistrictNumber: "03", DistrictName: "Pankow", SeatsWonDirectlyHTML: (document.getElementById("cdu-03-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-03-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-03-total-seats"))},
                    {DistrictNumber: "04", DistrictName: "Charlottenburg-Wilmersdorf", SeatsWonDirectlyHTML: (document.getElementById("cdu-04-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-04-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-04-total-seats"))},
                    {DistrictNumber: "05", DistrictName: "Spandau", SeatsWonDirectlyHTML: (document.getElementById("cdu-05-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-05-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-05-total-seats"))},
                    {DistrictNumber: "06", DistrictName: "Steglitz-Zehlendorf", SeatsWonDirectlyHTML: (document.getElementById("cdu-06-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-06-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-06-total-seats"))},
                    {DistrictNumber: "07", DistrictName: "Tempelhof-Schöneberg", SeatsWonDirectlyHTML: (document.getElementById("cdu-07-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-07-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-07-total-seats"))},
                    {DistrictNumber: "08", DistrictName: "Neukölln", SeatsWonDirectlyHTML: (document.getElementById("cdu-08-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-08-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-08-total-seats"))},
                    {DistrictNumber: "09", DistrictName: "Treptow-Köpenick", SeatsWonDirectlyHTML: (document.getElementById("cdu-09-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-09-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-09-total-seats"))},
                    {DistrictNumber: "10", DistrictName: "Marzahn-Hellersdorf", SeatsWonDirectlyHTML: (document.getElementById("cdu-10-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-10-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-10-total-seats"))},
                    {DistrictNumber: "11", DistrictName: "Lichtenberg", SeatsWonDirectlyHTML: (document.getElementById("cdu-11-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-11-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-11-total-seats"))},
                    {DistrictNumber: "12", DistrictName: "Reinickendorf", SeatsWonDirectlyHTML: (document.getElementById("cdu-12-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("cdu-12-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("cdu-12-total-seats"))},
                ], },
            {Partyname: "Grüne", FivePercentThreshold: true, Districtlist: gruene_districtlist_boolean, ListSeats: 0, OverhangSeats: 0, SecondaryVotePercentageHTML: (document.getElementById("gruene-secondary-vote-percentage")), SeatsWonDirectlyHTML: (document.getElementById("gruene-seats-won-directly")), ListSeatsHTML: (document.getElementById("gruene-list-seats")), SeatsAllocatedHTML: (document.getElementById("gruene-seats-allocated")), SeatsAllocated2HTML: (document.getElementById("gruene-seats-allocated2")), CompensationSeats: 0, CompensationSeatsHTML: (document.getElementById("gruene-compensation-seats")), OverhangSeatsHTML: (document.getElementById("gruene-overhang-seats")), DistrictSeatsEstimatesTotal: 0, DistrictSeatsEstimatesTotal2: 0, LargestParliamentSizeEstimate: false, Array1: [], Array2: [], Array3: [], Array4: [],
            Districtdata: [
                    {DistrictNumber: "01", DistrictName: "Mitte", SeatsWonDirectlyHTML: (document.getElementById("gruene-01-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-01-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-01-total-seats"))},
                    {DistrictNumber: "02", DistrictName: "Friedrichshain-Kreuzberg", SeatsWonDirectlyHTML: (document.getElementById("gruene-02-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-02-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-02-total-seats"))},
                    {DistrictNumber: "03", DistrictName: "Pankow", SeatsWonDirectlyHTML: (document.getElementById("gruene-03-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-03-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-03-total-seats"))},
                    {DistrictNumber: "04", DistrictName: "Charlottenburg-Wilmersdorf", SeatsWonDirectlyHTML: (document.getElementById("gruene-04-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-04-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-04-total-seats"))},
                    {DistrictNumber: "05", DistrictName: "Spandau", SeatsWonDirectlyHTML: (document.getElementById("gruene-05-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-05-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-05-total-seats"))},
                    {DistrictNumber: "06", DistrictName: "Steglitz-Zehlendorf", SeatsWonDirectlyHTML: (document.getElementById("gruene-06-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-06-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-06-total-seats"))},
                    {DistrictNumber: "07", DistrictName: "Tempelhof-Schöneberg", SeatsWonDirectlyHTML: (document.getElementById("gruene-07-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-07-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-07-total-seats"))},
                    {DistrictNumber: "08", DistrictName: "Neukölln", SeatsWonDirectlyHTML: (document.getElementById("gruene-08-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-08-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-08-total-seats"))},
                    {DistrictNumber: "09", DistrictName: "Treptow-Köpenick", SeatsWonDirectlyHTML: (document.getElementById("gruene-09-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-09-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-09-total-seats"))},
                    {DistrictNumber: "10", DistrictName: "Marzahn-Hellersdorf", SeatsWonDirectlyHTML: (document.getElementById("gruene-10-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-10-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-10-total-seats"))},
                    {DistrictNumber: "11", DistrictName: "Lichtenberg", SeatsWonDirectlyHTML: (document.getElementById("gruene-11-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-11-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-11-total-seats"))},
                    {DistrictNumber: "12", DistrictName: "Reinickendorf", SeatsWonDirectlyHTML: (document.getElementById("gruene-12-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("gruene-12-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("gruene-12-total-seats"))},
                ], },
            {Partyname: "Linke", FivePercentThreshold: true, Districtlist: linke_districtlist_boolean, ListSeats: 0, OverhangSeats: 0, SecondaryVotePercentageHTML: (document.getElementById("linke-secondary-vote-percentage")), SeatsWonDirectlyHTML: (document.getElementById("linke-seats-won-directly")), ListSeatsHTML: (document.getElementById("linke-list-seats")), SeatsAllocatedHTML: (document.getElementById("linke-seats-allocated")), SeatsAllocated2HTML: (document.getElementById("linke-seats-allocated2")), CompensationSeats: 0, CompensationSeatsHTML: (document.getElementById("linke-compensation-seats")), OverhangSeatsHTML: (document.getElementById("linke-overhang-seats")), DistrictSeatsEstimatesTotal: 0, DistrictSeatsEstimatesTotal2: 0, LargestParliamentSizeEstimate: false, Array1: [], Array2: [], Array3: [], Array4: [],
            Districtdata: [
                    {DistrictNumber: "01", DistrictName: "Mitte", SeatsWonDirectlyHTML: (document.getElementById("linke-01-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-01-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-01-total-seats"))},
                    {DistrictNumber: "02", DistrictName: "Friedrichshain-Kreuzberg", SeatsWonDirectlyHTML: (document.getElementById("linke-02-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-02-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-02-total-seats"))},
                    {DistrictNumber: "03", DistrictName: "Pankow", SeatsWonDirectlyHTML: (document.getElementById("linke-03-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-03-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-03-total-seats"))},
                    {DistrictNumber: "04", DistrictName: "Charlottenburg-Wilmersdorf", SeatsWonDirectlyHTML: (document.getElementById("linke-04-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-04-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-04-total-seats"))},
                    {DistrictNumber: "05", DistrictName: "Spandau", SeatsWonDirectlyHTML: (document.getElementById("linke-05-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-05-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-05-total-seats"))},
                    {DistrictNumber: "06", DistrictName: "Steglitz-Zehlendorf", SeatsWonDirectlyHTML: (document.getElementById("linke-06-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-06-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-06-total-seats"))},
                    {DistrictNumber: "07", DistrictName: "Tempelhof-Schöneberg", SeatsWonDirectlyHTML: (document.getElementById("linke-07-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-07-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-07-total-seats"))},
                    {DistrictNumber: "08", DistrictName: "Neukölln", SeatsWonDirectlyHTML: (document.getElementById("linke-08-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-08-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-08-total-seats"))},
                    {DistrictNumber: "09", DistrictName: "Treptow-Köpenick", SeatsWonDirectlyHTML: (document.getElementById("linke-09-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-09-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-09-total-seats"))},
                    {DistrictNumber: "10", DistrictName: "Marzahn-Hellersdorf", SeatsWonDirectlyHTML: (document.getElementById("linke-10-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-10-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-10-total-seats"))},
                    {DistrictNumber: "11", DistrictName: "Lichtenberg", SeatsWonDirectlyHTML: (document.getElementById("linke-11-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-11-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-11-total-seats"))},
                    {DistrictNumber: "12", DistrictName: "Reinickendorf", SeatsWonDirectlyHTML: (document.getElementById("linke-12-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("linke-12-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("linke-12-total-seats"))},
                ], },
            {Partyname: "AfD", FivePercentThreshold: true, Districtlist: afd_districtlist_boolean, ListSeats: 0, OverhangSeats: 0, SecondaryVotePercentageHTML: (document.getElementById("afd-secondary-vote-percentage")), SeatsWonDirectlyHTML: (document.getElementById("afd-seats-won-directly")), ListSeatsHTML: (document.getElementById("afd-list-seats")), SeatsAllocatedHTML: (document.getElementById("afd-seats-allocated")), SeatsAllocated2HTML: (document.getElementById("afd-seats-allocated2")), CompensationSeats: 0, CompensationSeatsHTML: (document.getElementById("afd-compensation-seats")), OverhangSeatsHTML: (document.getElementById("afd-overhang-seats")), DistrictSeatsEstimatesTotal: 0, DistrictSeatsEstimatesTotal2: 0, LargestParliamentSizeEstimate: false, Array1: [], Array2: [], Array3: [], Array4: [],
            Districtdata: [
                    {DistrictNumber: "01", DistrictName: "Mitte", SeatsWonDirectlyHTML: (document.getElementById("afd-01-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-01-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-01-total-seats"))},
                    {DistrictNumber: "02", DistrictName: "Friedrichshain-Kreuzberg", SeatsWonDirectlyHTML: (document.getElementById("afd-02-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-02-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-02-total-seats"))},
                    {DistrictNumber: "03", DistrictName: "Pankow", SeatsWonDirectlyHTML: (document.getElementById("afd-03-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-03-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-03-total-seats"))},
                    {DistrictNumber: "04", DistrictName: "Charlottenburg-Wilmersdorf", SeatsWonDirectlyHTML: (document.getElementById("afd-04-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-04-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-04-total-seats"))},
                    {DistrictNumber: "05", DistrictName: "Spandau", SeatsWonDirectlyHTML: (document.getElementById("afd-05-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-05-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-05-total-seats"))},
                    {DistrictNumber: "06", DistrictName: "Steglitz-Zehlendorf", SeatsWonDirectlyHTML: (document.getElementById("afd-06-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-06-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-06-total-seats"))},
                    {DistrictNumber: "07", DistrictName: "Tempelhof-Schöneberg", SeatsWonDirectlyHTML: (document.getElementById("afd-07-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-07-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-07-total-seats"))},
                    {DistrictNumber: "08", DistrictName: "Neukölln", SeatsWonDirectlyHTML: (document.getElementById("afd-08-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-08-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-08-total-seats"))},
                    {DistrictNumber: "09", DistrictName: "Treptow-Köpenick", SeatsWonDirectlyHTML: (document.getElementById("afd-09-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-09-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-09-total-seats"))},
                    {DistrictNumber: "10", DistrictName: "Marzahn-Hellersdorf", SeatsWonDirectlyHTML: (document.getElementById("afd-10-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-10-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-10-total-seats"))},
                    {DistrictNumber: "11", DistrictName: "Lichtenberg", SeatsWonDirectlyHTML: (document.getElementById("afd-11-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-11-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-11-total-seats"))},
                    {DistrictNumber: "12", DistrictName: "Reinickendorf", SeatsWonDirectlyHTML: (document.getElementById("afd-12-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("afd-12-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("afd-12-total-seats"))},
            ], },
            {Partyname: "FDP", FivePercentThreshold: true, Districtlist: fdp_districtlist_boolean, ListSeats: 0, OverhangSeats: 0, SecondaryVotePercentageHTML: (document.getElementById("fdp-secondary-vote-percentage")), SeatsWonDirectlyHTML: (document.getElementById("fdp-seats-won-directly")), ListSeatsHTML: (document.getElementById("fdp-list-seats")), SeatsAllocatedHTML: (document.getElementById("fdp-seats-allocated")), SeatsAllocated2HTML: (document.getElementById("fdp-seats-allocated2")), CompensationSeats: 0, CompensationSeatsHTML: (document.getElementById("fdp-compensation-seats")), OverhangSeatsHTML: (document.getElementById("fdp-overhang-seats")), DistrictSeatsEstimatesTotal: 0, DistrictSeatsEstimatesTotal2: 0, LargestParliamentSizeEstimate: false, Array1: [], Array2: [], Array3: [], Array4: [],
            Districtdata: [
                    {DistrictNumber: "01", DistrictName: "Mitte", SeatsWonDirectlyHTML: (document.getElementById("fdp-01-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-01-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-01-total-seats"))},
                    {DistrictNumber: "02", DistrictName: "Friedrichshain-Kreuzberg", SeatsWonDirectlyHTML: (document.getElementById("fdp-02-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-02-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-02-total-seats"))},
                    {DistrictNumber: "03", DistrictName: "Pankow", SeatsWonDirectlyHTML: (document.getElementById("fdp-03-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-03-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-03-total-seats"))},
                    {DistrictNumber: "04", DistrictName: "Charlottenburg-Wilmersdorf", SeatsWonDirectlyHTML: (document.getElementById("fdp-04-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-04-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-04-total-seats"))},
                    {DistrictNumber: "05", DistrictName: "Spandau", SeatsWonDirectlyHTML: (document.getElementById("fdp-05-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-05-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-05-total-seats"))},
                    {DistrictNumber: "06", DistrictName: "Steglitz-Zehlendorf", SeatsWonDirectlyHTML: (document.getElementById("fdp-06-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-06-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-06-total-seats"))},
                    {DistrictNumber: "07", DistrictName: "Tempelhof-Schöneberg", SeatsWonDirectlyHTML: (document.getElementById("fdp-07-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-07-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-07-total-seats"))},
                    {DistrictNumber: "08", DistrictName: "Neukölln", SeatsWonDirectlyHTML: (document.getElementById("fdp-08-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-08-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-08-total-seats"))},
                    {DistrictNumber: "09", DistrictName: "Treptow-Köpenick", SeatsWonDirectlyHTML: (document.getElementById("fdp-09-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-09-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-09-total-seats"))},
                    {DistrictNumber: "10", DistrictName: "Marzahn-Hellersdorf", SeatsWonDirectlyHTML: (document.getElementById("fdp-10-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-10-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-10-total-seats"))},
                    {DistrictNumber: "11", DistrictName: "Lichtenberg", SeatsWonDirectlyHTML: (document.getElementById("fdp-11-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-11-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-11-total-seats"))},
                    {DistrictNumber: "12", DistrictName: "Reinickendorf", SeatsWonDirectlyHTML: (document.getElementById("fdp-12-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("fdp-12-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("fdp-12-total-seats"))},
            ], },
            {Partyname: "Piraten", FivePercentThreshold: true, Districtlist: piraten_districtlist_boolean, ListSeats: 0, OverhangSeats: 0, SecondaryVotePercentageHTML: (document.getElementById("piraten-secondary-vote-percentage")), SeatsWonDirectlyHTML: (document.getElementById("piraten-seats-won-directly")), ListSeatsHTML: (document.getElementById("piraten-list-seats")), SeatsAllocatedHTML: (document.getElementById("piraten-seats-allocated")), SeatsAllocated2HTML: (document.getElementById("piraten-seats-allocated2")), CompensationSeats: 0, CompensationSeatsHTML: (document.getElementById("piraten-compensation-seats")), OverhangSeatsHTML: (document.getElementById("piraten-overhang-seats")), DistrictSeatsEstimatesTotal: 0, DistrictSeatsEstimatesTotal2: 0, LargestParliamentSizeEstimate: false, Array1: [], Array2: [], Array3: [], Array4: [],
            Districtdata: [
                    {DistrictNumber: "01", DistrictName: "Mitte", SeatsWonDirectlyHTML: (document.getElementById("piraten-01-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-01-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-01-total-seats"))},
                    {DistrictNumber: "02", DistrictName: "Friedrichshain-Kreuzberg", SeatsWonDirectlyHTML: (document.getElementById("piraten-02-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-02-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-02-total-seats"))},
                    {DistrictNumber: "03", DistrictName: "Pankow", SeatsWonDirectlyHTML: (document.getElementById("piraten-03-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-03-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-03-total-seats"))},
                    {DistrictNumber: "04", DistrictName: "Charlottenburg-Wilmersdorf", SeatsWonDirectlyHTML: (document.getElementById("piraten-04-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-04-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-04-total-seats"))},
                    {DistrictNumber: "05", DistrictName: "Spandau", SeatsWonDirectlyHTML: (document.getElementById("piraten-05-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-05-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-05-total-seats"))},
                    {DistrictNumber: "06", DistrictName: "Steglitz-Zehlendorf", SeatsWonDirectlyHTML: (document.getElementById("piraten-06-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-06-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-06-total-seats"))},
                    {DistrictNumber: "07", DistrictName: "Tempelhof-Schöneberg", SeatsWonDirectlyHTML: (document.getElementById("piraten-07-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-07-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-07-total-seats"))},
                    {DistrictNumber: "08", DistrictName: "Neukölln", SeatsWonDirectlyHTML: (document.getElementById("piraten-08-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-08-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-08-total-seats"))},
                    {DistrictNumber: "09", DistrictName: "Treptow-Köpenick", SeatsWonDirectlyHTML: (document.getElementById("piraten-09-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-09-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-09-total-seats"))},
                    {DistrictNumber: "10", DistrictName: "Marzahn-Hellersdorf", SeatsWonDirectlyHTML: (document.getElementById("piraten-10-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-10-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-10-total-seats"))},
                    {DistrictNumber: "11", DistrictName: "Lichtenberg", SeatsWonDirectlyHTML: (document.getElementById("piraten-11-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-11-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-11-total-seats"))},
                    {DistrictNumber: "12", DistrictName: "Reinickendorf", SeatsWonDirectlyHTML: (document.getElementById("piraten-12-seats-won-directly")), Districtlist: 0, DistrictlistHTML: (document.getElementById("piraten-12-list-seats")), OverhangSeats: 0, TotalSeatsHTML: (document.getElementById("piraten-12-total-seats"))},
            ], },
            ]

// 0.4 Various summary variables connected to HTML document            
            const SeatsWonDirectly_01_HTML = document.getElementById("total-01-seats-won-directly")    
            const SeatsWonDirectly_02_HTML = document.getElementById("total-02-seats-won-directly") 
            const SeatsWonDirectly_03_HTML = document.getElementById("total-03-seats-won-directly") 
            const SeatsWonDirectly_04_HTML = document.getElementById("total-04-seats-won-directly")     
            const SeatsWonDirectly_05_HTML = document.getElementById("total-05-seats-won-directly") 
            const SeatsWonDirectly_06_HTML = document.getElementById("total-06-seats-won-directly") 
            const SeatsWonDirectly_07_HTML = document.getElementById("total-07-seats-won-directly") 
            const SeatsWonDirectly_08_HTML = document.getElementById("total-08-seats-won-directly") 
            const SeatsWonDirectly_09_HTML = document.getElementById("total-09-seats-won-directly") 
            const SeatsWonDirectly_10_HTML = document.getElementById("total-10-seats-won-directly") 
            const SeatsWonDirectly_11_HTML = document.getElementById("total-11-seats-won-directly")     
            const SeatsWonDirectly_12_HTML = document.getElementById("total-12-seats-won-directly") 

            const ListSeats_01_HTML = document.getElementById("total-01-list-seats") 
            const ListSeats_02_HTML = document.getElementById("total-02-list-seats") 
            const ListSeats_03_HTML = document.getElementById("total-03-list-seats") 
            const ListSeats_04_HTML = document.getElementById("total-04-list-seats") 
            const ListSeats_05_HTML = document.getElementById("total-05-list-seats") 
            const ListSeats_06_HTML = document.getElementById("total-06-list-seats") 
            const ListSeats_07_HTML = document.getElementById("total-07-list-seats") 
            const ListSeats_08_HTML = document.getElementById("total-08-list-seats") 
            const ListSeats_09_HTML = document.getElementById("total-09-list-seats") 
            const ListSeats_10_HTML = document.getElementById("total-10-list-seats") 
            const ListSeats_11_HTML = document.getElementById("total-11-list-seats") 
            const ListSeats_12_HTML = document.getElementById("total-12-list-seats") 

            const OthersSecondaryVotePercentage_HTML = document.getElementById("others-secondary-vote-percentage")
            const SeatsAllocated_HTML = document.getElementById("total-seats-allocated")
            const SeatsAllocated2_HTML = document.getElementById("total-seats-allocated2")
            const OverhangSeats_HTML = document.getElementById("total-overhang-seats")
            const CompensationSeats_HTML = document.getElementById("total-compensation-seats")
            const SeatsWonDirectly_HTML = document.getElementById("total-seats-won-directly")    
            const ListSeats_HTML = document.getElementById("total-list-seats")  

            const LandlistSeats_SPD_HTML = document.getElementById("spd-landlist-seats")
            const LandlistSeats_CDU_HTML = document.getElementById("cdu-landlist-seats")
            const LandlistSeats_Gruene_HTML = document.getElementById("gruene-landlist-seats")
            const LandlistSeats_Linke_HTML = document.getElementById("linke-landlist-seats")
            const LandlistSeats_AfD_HTML = document.getElementById("afd-landlist-seats")
            const LandlistSeats_FDP_HTML = document.getElementById("fdp-landlist-seats")
            const LandlistSeats_Piraten_HTML = document.getElementById("piraten-landlist-seats")
            const LandlistSeats_Total_HTML = document.getElementById("total-landlist-seats") 

// 0.5 Get the actual data depending on the analysis year selected     
            const year2006 = document.getElementById("2006")   
            const year2011 = document.getElementById("2011")       
            const year2016 = document.getElementById("2016")
            const year2021 = document.getElementById("2021")
            const year2023 = document.getElementById("2023")

            if (year2006.checked) {
                data = data_2006
            }
            else if (year2011.checked) {
                data = data_2011
            }
            else if (year2016.checked) {
                data = data_2016
            }
            else if (year2021.checked) {
                data = data_2021
            }
            else if (year2023.checked) {
                data = data_2023
            }

            SecondaryVotesTotalPlusOthers = data["SecondaryVotesTotalPlusOthers"]
            for (let i in Parties) {
                Parties[i].SecondaryVotes = data["Parties"][i]["SecondaryVotes"]
                Parties[i].SeatsWonDirectly = data["Parties"][i]["SeatsWonDirectly"]
                for (let d in Parties[i].Districtdata) {
                    Parties[i].Districtdata[d].SecondaryVotes = data["Parties"][i]["Districtdata"][d]["SecondaryVotes"]
                    Parties[i].Districtdata[d].SeatsWonDirectly = data["Parties"][i]["Districtdata"][d]["SeatsWonDirectly"]
                }    
            }
            
// 1 Functions used in the code
// 1.1 Function to calculate rounded number of seats per party for parliament as a whole
            function calcSeatsAllocated (SecondaryVotes, ParlSize, SecondaryVotesTotal) {
                let SeatsEstimate = SecondaryVotes * ParlSize / SecondaryVotesTotal
                let SeatsAllocated = Math.floor(SeatsEstimate)
                return SeatsAllocated
            }

// 1.2 Same as 1.1 but calculate number of seats per party in each district taking into account directly won seats            
            function calcSeatsAllocatedDirect(SecondaryVotes, ParlSize, SecondaryVotesTotal, SeatsWonDirectly) {
                let SeatsEstimate = SecondaryVotes * ParlSize / SecondaryVotesTotal
                let SeatsAllocated = Math.floor(SeatsEstimate)
                if (SeatsAllocated < SeatsWonDirectly) {
                    SeatsAllocated = SeatsWonDirectly
                }
                return SeatsAllocated
            }

// 1.3 Function that returns the fraction that remains from 1.1 without rounding            
            function calcAllocatedSeatNumberFraction (SecondaryVotes, ParlSize, SecondaryVotesTotal) {
                let SeatsEstimate = SecondaryVotes * ParlSize / SecondaryVotesTotal
                let SeatsAllocated = Math.floor(SeatsEstimate)
                let AllocatedSeatNumberFraction = SeatsEstimate - SeatsAllocated
                return AllocatedSeatNumberFraction
            }

// 1.4 Same as 1.3 but for 1.2            
            function calcAllocatedSeatNumberFractionDirect (SecondaryVotes, ParlSize, SecondaryVotesTotal, SeatsWonDirectly) {
                let SeatsEstimate = SecondaryVotes * ParlSize / SecondaryVotesTotal
                let SeatsAllocated = Math.floor(SeatsEstimate)
                if (SeatsAllocated < SeatsWonDirectly) {
                    SeatsAllocated = SeatsWonDirectly
                }
                let AllocatedSeatNumberFraction = SeatsEstimate - SeatsAllocated
                return AllocatedSeatNumberFraction
            }

// 1.5 Functon to sort the fractions from 1.3 and 1.4 by size and depending on how many seats are yet to be allocated keeps that number of highest fractions             
            function calcArraySort(ArrayToSort, ParlSize, SeatsAllocated) {
                let Rest = ParlSize - SeatsAllocated
                let ArraySorted = ArrayToSort.sort().reverse()
                let ArrayDeleted = ArraySorted.splice(0, Rest)
                return ArrayDeleted
            }

// 1.6 Function to check if a fraction of a party is included in 1.5 and adds another allocated seat            
            function calcArrayCheck(ArrayToCheck, FractionCheck, SeatsAllocated) {
                if (ArrayToCheck.indexOf(FractionCheck) >=0) {
                    SeatsAllocated = SeatsAllocated +1
                }
                return SeatsAllocated
            }

// 2 Code to calculate the number of seats per party
// 2.1 Calculate voting percentages and check 5 percent electoral threshold
            for (let Party of Parties) {
                let PartySecondaryVotePercentage = Number(((Party.SecondaryVotes / SecondaryVotesTotalPlusOthers) * 100).toFixed(1))
                Party.SecondaryVotePercentage = PartySecondaryVotePercentage + "%"
                if (PartySecondaryVotePercentage >= 5) {
                    Party.FivePercentThreshold = true
                    let SecondaryVotes = Party.SecondaryVotes
                    SecondaryVotesTotal+= SecondaryVotes
                }
                else if (PartySecondaryVotePercentage < 5) {
                    Party.FivePercentThreshold = false
                }
            }
            let OthersVotePercentage = Number((((SecondaryVotesTotalPlusOthers - SecondaryVotesTotal)/SecondaryVotesTotalPlusOthers)*100).toFixed(1)) +"%"

// 2.2 Estimation of parliament at norm size (130 seats)
// 2.2.1 For each party calculate the rounded number of seats as well as the fraction remaining
            for (let Party of Parties) {
                if (Party.FivePercentThreshold === false) {
                    let SeatsAllocated = Party.SeatsWonDirectly
                    Party.SeatsAllocated = SeatsAllocated
                    SeatsEstimatesTotal+= SeatsAllocated
                    let AllocatedSeatNumberFraction = 0
                    Party.AllocatedSeatNumberFraction = AllocatedSeatNumberFraction
                    SortingArray1.push(AllocatedSeatNumberFraction)
                }
                else if (Party.FivePercentThreshold === true) {
                    let SeatsAllocated = calcSeatsAllocatedDirect (Party.SecondaryVotes, ParliamentNormSize, SecondaryVotesTotal, Party.SeatsWonDirectly)
                    Party.SeatsAllocated = SeatsAllocated
                    SeatsEstimatesTotal+= SeatsAllocated
                    let AllocatedSeatNumberFraction = calcAllocatedSeatNumberFractionDirect (Party.SecondaryVotes, ParliamentNormSize, SecondaryVotesTotal, Party.SeatsWonDirectly)
                    Party.AllocatedSeatNumberFraction = AllocatedSeatNumberFraction
                    SortingArray1.push(AllocatedSeatNumberFraction)
                }
            }

// 2.2.2 Sort the array of fractions and keep the number of highest frations equal to the number of unallocated seats           
            SortingArray2 = calcArraySort(SortingArray1, ParliamentNormSize, SeatsEstimatesTotal)
            SeatsEstimatesTotal = 0

// 2.2.3 Allocate the unallocated seats to the parties with the highest fractions
            for (let Party of Parties) {
                if (Party.FivePercentThreshold === false) {
                    let SeatsAllocated = Party.SeatsWonDirectly
                    Party.SeatsAllocated = SeatsAllocated
                    SeatsEstimatesTotal+= SeatsAllocated
                }
                else if (Party.FivePercentThreshold === true) {
                    let SeatsAllocated = calcArrayCheck(SortingArray2, Party.AllocatedSeatNumberFraction, Party.SeatsAllocated)
                    Party.SeatsAllocated = SeatsAllocated
                    SeatsEstimatesTotal+= SeatsAllocated

// 2.2.4 Similarly, in each district calculate the number of district seats for each party with a district list              
                    if (Party.Districtlist) {
                        for (let District of Party.Districtdata) {
                            let SeatsAllocated = calcSeatsAllocated (District.SecondaryVotes, Party.SeatsAllocated, Party.SecondaryVotes)
                            District.SeatsAllocated = SeatsAllocated
                            Party.DistrictSeatsEstimatesTotal+= SeatsAllocated
                            let AllocatedSeatNumberFraction = calcAllocatedSeatNumberFraction (District.SecondaryVotes, Party.SeatsAllocated, Party.SecondaryVotes)
                            District.AllocatedSeatNumberFraction = AllocatedSeatNumberFraction
                            Party.Array1.push(AllocatedSeatNumberFraction)
                        }

                        Party.Array2 = calcArraySort(Party.Array1, Party.SeatsAllocated, Party.DistrictSeatsEstimatesTotal)

// 2.2.5 Assign the number of district seats, taking into account possible overhang seats                    
                        for (let District of Party.Districtdata) {
                            let SeatsAllocated = calcArrayCheck(Party.Array2, District.AllocatedSeatNumberFraction, District.SeatsAllocated)
                            District.SeatsAllocated = SeatsAllocated
                            let OverhangSeats = 0
                                if (District.SeatsWonDirectly > District.SeatsAllocated) {
                                    OverhangSeats = District.SeatsWonDirectly - District.SeatsAllocated
                                }
                            District.OverhangSeats = OverhangSeats
                            Party.OverhangSeats+= OverhangSeats
                            OverhangSeatsTotal+= OverhangSeats  
                            let Districtlist = SeatsAllocated - District.SeatsWonDirectly
                            District.Districtlist = Districtlist  
                        }
                    }        
                }
            }

// 2.3 Estimation of parliament size for each party with district lists given the number of overhang seats, maximum equals new parliament size
            for (let Party of Parties) {
                if (Party.FivePercentThreshold && ((Party.SeatsWonDirectly >= Party.SeatsAllocated) || Party.Districtlist)) {
                    let PartySeats = Party.SeatsAllocated + Party.OverhangSeats
                    let ParlSizeEstimateUnrounded = PartySeats * SecondaryVotesTotal / Party.SecondaryVotes
                    let ParliamentSizeEstimate = Math.round(ParlSizeEstimateUnrounded)
                    Party.ParliamentSizeEstimate = ParliamentSizeEstimate
                    ParliamentSize.push(ParliamentSizeEstimate)
                }
            }
            ParliamentSize = ParliamentSize.sort().reverse()[0]

            for (let Party of Parties) {
                if (Party.FivePercentThreshold && ((Party.SeatsWonDirectly >= Party.SeatsAllocated) || Party.Districtlist)) {
                    if (Party.ParliamentSizeEstimate === ParliamentSize) {
                        Party.LargestParliamentSizeEstimate = true
                    }
                }
            }        

// 2.4 Redo step 2.2 for the new parliament size and estimate possible compensation seats for each party
            for (let Party of Parties) {
                if (Party.FivePercentThreshold === false) {
                    let SeatsAllocated2 = Party.SeatsWonDirectly
                    Party.SeatsAllocated2 = SeatsAllocated2
                    SeatsEstimatesTotal2+= SeatsAllocated2
                    let AllocatedSeatNumberFraction2 = 0
                    Party.AllocatedSeatNumberFraction2 = AllocatedSeatNumberFraction2
                    SortingArray3.push(AllocatedSeatNumberFraction2)
                }
                else if (Party.FivePercentThreshold === true) {
                    let SeatsAllocated2 = calcSeatsAllocated (Party.SecondaryVotes, ParliamentSize, SecondaryVotesTotal)
                    Party.SeatsAllocated2 = SeatsAllocated2
                    SeatsEstimatesTotal2+= SeatsAllocated2
                    let AllocatedSeatNumberFraction2 = calcAllocatedSeatNumberFraction (Party.SecondaryVotes, ParliamentSize, SecondaryVotesTotal)
                    Party.AllocatedSeatNumberFraction2 = AllocatedSeatNumberFraction2
                    SortingArray3.push(AllocatedSeatNumberFraction2)
                }
            }

            SortingArray4 = calcArraySort(SortingArray3, ParliamentSize, SeatsEstimatesTotal2)
            SeatsEstimatesTotal2 = 0

            for (let Party of Parties) {
                if (Party.FivePercentThreshold === false) {
                    let SeatsAllocated2 = Party.SeatsWonDirectly
                    Party.SeatsAllocated2 = SeatsAllocated2
                    SeatsEstimatesTotal2+= SeatsAllocated2
                    let CompensationSeats = 0
                    Party.CompensationSeats = CompensationSeats
                    let ListSeats = 0
                    Party.ListSeats = ListSeats
                    let SeatsWonDirectly = Party.SeatsWonDirectly
                    SeatsWonDirectlyTotal+= SeatsWonDirectly
                }
                else if (Party.FivePercentThreshold === true) {
                    let SeatsAllocated2 = calcArrayCheck(SortingArray4, Party.AllocatedSeatNumberFraction2, Party.SeatsAllocated2)
                    Party.SeatsAllocated2 = SeatsAllocated2
                    SeatsEstimatesTotal2+= SeatsAllocated2
                    let CompensationSeats = Party.SeatsAllocated2 - Party.SeatsAllocated - Party.OverhangSeats
                    Party.CompensationSeats = CompensationSeats
                    CompensationSeatsTotal+= CompensationSeats
                    let ListSeats = Party.SeatsAllocated2 - Party.SeatsWonDirectly
                    Party.ListSeats = ListSeats
                    ListSeatsTotal+= ListSeats
                    let SeatsWonDirectly = Party.SeatsWonDirectly
                    SeatsWonDirectlyTotal+= SeatsWonDirectly


                    if (Party.Districtlist && (Party.LargestParliamentSizeEstimate === false)) {
                        for (let District of Party.Districtdata) {
                            let SeatsAllocated = calcSeatsAllocatedDirect (District.SecondaryVotes, Party.SeatsAllocated2, Party.SecondaryVotes, District.SeatsWonDirectly)
                            District.SeatsAllocated = SeatsAllocated
                            Party.DistrictSeatsEstimatesTotal2+= SeatsAllocated
                            let AllocatedSeatNumberFraction = calcAllocatedSeatNumberFractionDirect (District.SecondaryVotes, Party.SeatsAllocated2, Party.SecondaryVotes, District.SeatsWonDirectly)
                            District.AllocatedSeatNumberFraction = AllocatedSeatNumberFraction
                            Party.Array3.push(AllocatedSeatNumberFraction)
                        }

                        Party.Array4 = calcArraySort(Party.Array3, Party.SeatsAllocated2, Party.DistrictSeatsEstimatesTotal2)

                        for (let District of Party.Districtdata) {
                            let SeatsAllocated = calcArrayCheck(Party.Array4, District.AllocatedSeatNumberFraction, District.SeatsAllocated)
                            District.SeatsAllocated = SeatsAllocated
                            let Districtlist = SeatsAllocated - District.SeatsWonDirectly
                            District.Districtlist = Districtlist
                        }
                    }
              
                    else if (Party.Districtlist  && (Party.LargestParliamentSizeEstimate === true)) {
                        for (let District of Party.Districtdata) {
                            let SeatsAllocated = District.SeatsAllocated
                            if (District.SeatsAllocated >= District.SeatsWonDirectly) {
                                SeatsAllocated = District.SeatsAllocated
                            }
                            else if (District.SeatsAllocated < District.SeatsWonDirectly) {
                                SeatsAllocated = District.SeatsWonDirectly
                            }
                            District.SeatsAllocated = SeatsAllocated
                            Party.DistrictSeatsEstimatesTotal2+= SeatsAllocated
                            let Districtlist = SeatsAllocated - District.SeatsWonDirectly
                            District.Districtlist = Districtlist
                        }
                    }
                }  
            }    

// 3 Assign output variables for HTML document       
            OthersSecondaryVotePercentage_HTML.innerHTML = OthersVotePercentage
            SeatsAllocated_HTML.innerHTML = SeatsEstimatesTotal
            SeatsAllocated2_HTML.innerHTML = ParliamentSize
            SeatsWonDirectly_HTML.innerHTML = SeatsWonDirectlyTotal
            OverhangSeats_HTML.innerHTML = OverhangSeatsTotal
            ListSeats_HTML.innerHTML = ListSeatsTotal
            CompensationSeats_HTML.innerHTML = CompensationSeatsTotal

            for (let Party of Parties) {
                Party.SecondaryVotePercentageHTML.innerHTML = Party.SecondaryVotePercentage
                Party.SeatsAllocatedHTML.innerHTML = Party.SeatsAllocated
                Party.SeatsAllocated2HTML.innerHTML = Party.SeatsAllocated2
                if (Party.SeatsAllocated2 === 0) {
                    Party.SeatsAllocated2HTML.style.backgroundColor = "orange"
                }
                else if (Party.SeatsAllocated2 > 0) {
                    Party.SeatsAllocated2HTML.style.backgroundColor = "white"
                }
                Party.SeatsWonDirectlyHTML.innerHTML = Party.SeatsWonDirectly
                Party.OverhangSeatsHTML.innerHTML = Party.OverhangSeats
                Party.ListSeatsHTML.innerHTML = Party.ListSeats
                Party.CompensationSeatsHTML.innerHTML = Party.CompensationSeats

                for (let District of Party.Districtdata) {
                    District.SeatsWonDirectlyHTML.innerHTML = District.SeatsWonDirectly
                    District.DistrictlistHTML.innerHTML = District.Districtlist
                    District.TotalSeatsHTML.innerHTML = District.SeatsWonDirectly + District.Districtlist
// Edit the background color of district summary cells depending on result             
                    if (Party.FivePercentThreshold) {
                        if (District.SeatsWonDirectly + District.Districtlist === 0) {
                            District.TotalSeatsHTML.style.backgroundColor = "red"
                        }
                        else if (District.SeatsWonDirectly + District.Districtlist > 0) {
                            District.TotalSeatsHTML.style.backgroundColor = "green"
                        }
                    }
                    else if (Party.FivePercentThreshold === false) {
                            District.TotalSeatsHTML.style.backgroundColor = "white"
                    }
                }
                SeatsWonDirectly_01_Total+= Party.Districtdata[0].SeatsWonDirectly
                SeatsWonDirectly_02_Total+= Party.Districtdata[1].SeatsWonDirectly
                SeatsWonDirectly_03_Total+= Party.Districtdata[2].SeatsWonDirectly
                SeatsWonDirectly_04_Total+= Party.Districtdata[3].SeatsWonDirectly
                SeatsWonDirectly_05_Total+= Party.Districtdata[4].SeatsWonDirectly
                SeatsWonDirectly_06_Total+= Party.Districtdata[5].SeatsWonDirectly
                SeatsWonDirectly_07_Total+= Party.Districtdata[6].SeatsWonDirectly
                SeatsWonDirectly_08_Total+= Party.Districtdata[7].SeatsWonDirectly
                SeatsWonDirectly_09_Total+= Party.Districtdata[8].SeatsWonDirectly
                SeatsWonDirectly_10_Total+= Party.Districtdata[9].SeatsWonDirectly
                SeatsWonDirectly_11_Total+= Party.Districtdata[10].SeatsWonDirectly
                SeatsWonDirectly_12_Total+= Party.Districtdata[11].SeatsWonDirectly
                ListSeats_01_Total+= Party.Districtdata[0].Districtlist
                ListSeats_02_Total+= Party.Districtdata[1].Districtlist
                ListSeats_03_Total+= Party.Districtdata[2].Districtlist
                ListSeats_04_Total+= Party.Districtdata[3].Districtlist
                ListSeats_05_Total+= Party.Districtdata[4].Districtlist
                ListSeats_06_Total+= Party.Districtdata[5].Districtlist
                ListSeats_07_Total+= Party.Districtdata[6].Districtlist
                ListSeats_08_Total+= Party.Districtdata[7].Districtlist
                ListSeats_09_Total+= Party.Districtdata[8].Districtlist
                ListSeats_10_Total+= Party.Districtdata[9].Districtlist
                ListSeats_11_Total+= Party.Districtdata[10].Districtlist
                ListSeats_12_Total+= Party.Districtdata[11].Districtlist 
            }
            
            SeatsWonDirectly_01_HTML.innerHTML = SeatsWonDirectly_01_Total
            SeatsWonDirectly_02_HTML.innerHTML = SeatsWonDirectly_02_Total
            SeatsWonDirectly_03_HTML.innerHTML = SeatsWonDirectly_03_Total
            SeatsWonDirectly_04_HTML.innerHTML = SeatsWonDirectly_04_Total
            SeatsWonDirectly_05_HTML.innerHTML = SeatsWonDirectly_05_Total
            SeatsWonDirectly_06_HTML.innerHTML = SeatsWonDirectly_06_Total
            SeatsWonDirectly_07_HTML.innerHTML = SeatsWonDirectly_07_Total
            SeatsWonDirectly_08_HTML.innerHTML = SeatsWonDirectly_08_Total
            SeatsWonDirectly_09_HTML.innerHTML = SeatsWonDirectly_09_Total
            SeatsWonDirectly_10_HTML.innerHTML = SeatsWonDirectly_10_Total
            SeatsWonDirectly_11_HTML.innerHTML = SeatsWonDirectly_11_Total
            SeatsWonDirectly_12_HTML.innerHTML = SeatsWonDirectly_12_Total

            ListSeats_01_HTML.innerHTML = ListSeats_01_Total
            ListSeats_02_HTML.innerHTML = ListSeats_02_Total
            ListSeats_03_HTML.innerHTML = ListSeats_03_Total
            ListSeats_04_HTML.innerHTML = ListSeats_04_Total
            ListSeats_05_HTML.innerHTML = ListSeats_05_Total
            ListSeats_06_HTML.innerHTML = ListSeats_06_Total
            ListSeats_07_HTML.innerHTML = ListSeats_07_Total
            ListSeats_08_HTML.innerHTML = ListSeats_08_Total
            ListSeats_09_HTML.innerHTML = ListSeats_09_Total
            ListSeats_10_HTML.innerHTML = ListSeats_10_Total
            ListSeats_11_HTML.innerHTML = ListSeats_11_Total
            ListSeats_12_HTML.innerHTML = ListSeats_12_Total

            LandlistSeats_SPD_HTML.innerHTML = Parties[0].ListSeats - Parties[0].Districtdata[0].Districtlist - Parties[0].Districtdata[1].Districtlist - Parties[0].Districtdata[2].Districtlist - Parties[0].Districtdata[3].Districtlist - Parties[0].Districtdata[4].Districtlist - Parties[0].Districtdata[5].Districtlist - Parties[0].Districtdata[6].Districtlist - Parties[0].Districtdata[7].Districtlist - Parties[0].Districtdata[8].Districtlist - Parties[0].Districtdata[9].Districtlist - Parties[0].Districtdata[10].Districtlist - Parties[0].Districtdata[11].Districtlist
            LandlistSeats_CDU_HTML.innerHTML = Parties[1].ListSeats - Parties[1].Districtdata[0].Districtlist - Parties[1].Districtdata[1].Districtlist - Parties[1].Districtdata[2].Districtlist - Parties[1].Districtdata[3].Districtlist - Parties[1].Districtdata[4].Districtlist - Parties[1].Districtdata[5].Districtlist - Parties[1].Districtdata[6].Districtlist - Parties[1].Districtdata[7].Districtlist - Parties[1].Districtdata[8].Districtlist - Parties[1].Districtdata[9].Districtlist - Parties[1].Districtdata[10].Districtlist - Parties[1].Districtdata[11].Districtlist
            LandlistSeats_Gruene_HTML.innerHTML = Parties[2].ListSeats - Parties[2].Districtdata[0].Districtlist - Parties[2].Districtdata[1].Districtlist - Parties[2].Districtdata[2].Districtlist - Parties[2].Districtdata[3].Districtlist - Parties[2].Districtdata[4].Districtlist - Parties[2].Districtdata[5].Districtlist - Parties[2].Districtdata[6].Districtlist - Parties[2].Districtdata[7].Districtlist - Parties[2].Districtdata[8].Districtlist - Parties[2].Districtdata[9].Districtlist - Parties[2].Districtdata[10].Districtlist - Parties[2].Districtdata[11].Districtlist
            LandlistSeats_Linke_HTML.innerHTML = Parties[3].ListSeats - Parties[3].Districtdata[0].Districtlist - Parties[3].Districtdata[1].Districtlist - Parties[3].Districtdata[2].Districtlist - Parties[3].Districtdata[3].Districtlist - Parties[3].Districtdata[4].Districtlist - Parties[3].Districtdata[5].Districtlist - Parties[3].Districtdata[6].Districtlist - Parties[3].Districtdata[7].Districtlist - Parties[3].Districtdata[8].Districtlist - Parties[3].Districtdata[9].Districtlist - Parties[3].Districtdata[10].Districtlist - Parties[3].Districtdata[11].Districtlist
            LandlistSeats_AfD_HTML.innerHTML = Parties[4].ListSeats - Parties[4].Districtdata[0].Districtlist - Parties[4].Districtdata[1].Districtlist - Parties[4].Districtdata[2].Districtlist - Parties[4].Districtdata[3].Districtlist - Parties[4].Districtdata[4].Districtlist - Parties[4].Districtdata[5].Districtlist - Parties[4].Districtdata[6].Districtlist - Parties[4].Districtdata[7].Districtlist - Parties[4].Districtdata[8].Districtlist - Parties[4].Districtdata[9].Districtlist - Parties[4].Districtdata[10].Districtlist - Parties[4].Districtdata[11].Districtlist
            LandlistSeats_FDP_HTML.innerHTML = Parties[5].ListSeats - Parties[5].Districtdata[0].Districtlist - Parties[5].Districtdata[1].Districtlist - Parties[5].Districtdata[2].Districtlist - Parties[5].Districtdata[3].Districtlist - Parties[5].Districtdata[4].Districtlist - Parties[5].Districtdata[5].Districtlist - Parties[5].Districtdata[6].Districtlist - Parties[5].Districtdata[7].Districtlist - Parties[5].Districtdata[8].Districtlist - Parties[5].Districtdata[9].Districtlist - Parties[5].Districtdata[10].Districtlist - Parties[5].Districtdata[11].Districtlist
            LandlistSeats_Piraten_HTML.innerHTML = Parties[6].ListSeats - Parties[6].Districtdata[0].Districtlist - Parties[6].Districtdata[1].Districtlist - Parties[6].Districtdata[2].Districtlist - Parties[6].Districtdata[3].Districtlist - Parties[6].Districtdata[4].Districtlist - Parties[6].Districtdata[5].Districtlist - Parties[6].Districtdata[6].Districtlist - Parties[6].Districtdata[7].Districtlist - Parties[6].Districtdata[8].Districtlist - Parties[6].Districtdata[9].Districtlist - Parties[6].Districtdata[10].Districtlist - Parties[6].Districtdata[11].Districtlist
            LandlistSeats_Total_HTML.innerHTML = Parties[0].ListSeats + Parties[1].ListSeats + Parties[2].ListSeats + Parties[3].ListSeats + Parties[4].ListSeats + Parties[5].ListSeats
                    - Parties[0].Districtdata[0].Districtlist - Parties[0].Districtdata[1].Districtlist - Parties[0].Districtdata[2].Districtlist - Parties[0].Districtdata[3].Districtlist - Parties[0].Districtdata[4].Districtlist - Parties[0].Districtdata[5].Districtlist - Parties[0].Districtdata[6].Districtlist - Parties[0].Districtdata[7].Districtlist - Parties[0].Districtdata[8].Districtlist - Parties[0].Districtdata[9].Districtlist - Parties[0].Districtdata[10].Districtlist - Parties[0].Districtdata[11].Districtlist 
                    - Parties[1].Districtdata[0].Districtlist - Parties[1].Districtdata[1].Districtlist - Parties[1].Districtdata[2].Districtlist - Parties[1].Districtdata[3].Districtlist - Parties[1].Districtdata[4].Districtlist - Parties[1].Districtdata[5].Districtlist - Parties[1].Districtdata[6].Districtlist - Parties[1].Districtdata[7].Districtlist - Parties[1].Districtdata[8].Districtlist - Parties[1].Districtdata[9].Districtlist - Parties[1].Districtdata[10].Districtlist - Parties[1].Districtdata[11].Districtlist
                    - Parties[2].Districtdata[0].Districtlist - Parties[2].Districtdata[1].Districtlist - Parties[2].Districtdata[2].Districtlist - Parties[2].Districtdata[3].Districtlist - Parties[2].Districtdata[4].Districtlist - Parties[2].Districtdata[5].Districtlist - Parties[2].Districtdata[6].Districtlist - Parties[2].Districtdata[7].Districtlist - Parties[2].Districtdata[8].Districtlist - Parties[2].Districtdata[9].Districtlist - Parties[2].Districtdata[10].Districtlist - Parties[2].Districtdata[11].Districtlist
                    - Parties[3].Districtdata[0].Districtlist - Parties[3].Districtdata[1].Districtlist - Parties[3].Districtdata[2].Districtlist - Parties[3].Districtdata[3].Districtlist - Parties[3].Districtdata[4].Districtlist - Parties[3].Districtdata[5].Districtlist - Parties[3].Districtdata[6].Districtlist - Parties[3].Districtdata[7].Districtlist - Parties[3].Districtdata[8].Districtlist - Parties[3].Districtdata[9].Districtlist - Parties[3].Districtdata[10].Districtlist - Parties[3].Districtdata[11].Districtlist
                    - Parties[4].Districtdata[0].Districtlist - Parties[4].Districtdata[1].Districtlist - Parties[4].Districtdata[2].Districtlist - Parties[4].Districtdata[3].Districtlist - Parties[4].Districtdata[4].Districtlist - Parties[4].Districtdata[5].Districtlist - Parties[4].Districtdata[6].Districtlist - Parties[4].Districtdata[7].Districtlist - Parties[4].Districtdata[8].Districtlist - Parties[4].Districtdata[9].Districtlist - Parties[4].Districtdata[10].Districtlist - Parties[4].Districtdata[11].Districtlist
                    - Parties[5].Districtdata[0].Districtlist - Parties[5].Districtdata[1].Districtlist - Parties[5].Districtdata[2].Districtlist - Parties[5].Districtdata[3].Districtlist - Parties[5].Districtdata[4].Districtlist - Parties[5].Districtdata[5].Districtlist - Parties[5].Districtdata[6].Districtlist - Parties[5].Districtdata[7].Districtlist - Parties[5].Districtdata[8].Districtlist - Parties[5].Districtdata[9].Districtlist - Parties[5].Districtdata[10].Districtlist - Parties[5].Districtdata[11].Districtlist      
        })
    }
})