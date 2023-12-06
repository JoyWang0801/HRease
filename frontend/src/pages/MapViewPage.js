"use client"

import {React, useEffect, useState} from "react";
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import {Container, Grid} from "@mui/material";
import NavBar from "../components/NavBar";
import BubbleComponent from "../components/BubbleComponent";
import pb from "../lib/pocketbase";

export default function MapViewPage() {
    const position = { lat: 51.11949664317023, lng: -114.04654247485743 };
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState();


    useEffect(() => {
        async function fetchData() {
            try {
                const records = await pb.collection('branch').getFullList({
                    expand: 'employees',
                    sort: '-address'
                });
                // Transform the records into rows for the DataGrid
                const dataRows = records.map((record, index) => ({
                    id: index, // or record.id if it's unique
                    ...record
                }));

                const groupedByAddress = records.reduce((acc, record) => {
                    // If the address doesn't exist in the accumulator, add it
                    if (!acc[record.address]) {
                        acc[record.address] = [];
                    }

                    // Push [name, age] pair to the corresponding address
                    acc[record.address].push(record);
                    return acc;
                }, {});

                const branchList = []
                for (const [key, value] of Object.entries(groupedByAddress)) {
                    //console.log(`${key}: ${value}`);
                    branchList.push(value);
                }

                //console.log("groupedByAddress", groupedByAddress);
                setRows(branchList);

                //console.log("row: ", rows);

            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        fetchData();
    }, []);

    return (
        <Container disableGutters maxWidth={false}>
            {/*<Box mt={0} mb={4}>*/}
            <Grid container spacing={3}>
                {/* Sidebar */}
                <Grid item xs={12} sm={4} md={2.6}>
                    <NavBar />
                </Grid>
                {/* Main content */}
                <Grid item xs={12} sm={8} md={9.4} container spacing={3} sx={{mt:'5px'}}>
                    <APIProvider apiKey={process.env.REACT_APP_MAP_TOKEN}>
                        <div style={{ height: '100vh', width: '100%' }}>
                            {rows && rows.length > 0 && (
                                <Map zoom={12.5} center={position} mapId={process.env.REACT_APP_MAP_ID}>
                                    {rows.map((row) => (
                                        <AdvancedMarker position={{lat: row[0].lat, lng: row[0].long}}
                                                        onClick={() => setOpen(true)}>
                                            <BubbleComponent branchInfo={row}/>
                                        </AdvancedMarker>
                                    ))}
                                    {/* <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                                            <BubbleComponent />
                                        </AdvancedMarker> */}
                                </Map>
                            )}
                        </div>
                    </APIProvider>
                </Grid>
            </Grid>
            {/*</Box>*/}
        </Container>
    );
}