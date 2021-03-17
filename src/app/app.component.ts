 import { ClusterOptions, ClusterStyle } from '@agm/js-marker-clusterer/services/google-clusterer-types';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clusterStyles: ClusterStyle[]  = [
    {
        textColor: "#FFFFFF",
        url: "assets/img-12.jpg",
        height: 50,
        width: 58
    },
    {
        textColor: "#FFFFFF",
        url: "assets/img-12.jpg",
        height: 70,
        width: 58
    }
];
  clusterOptions: ClusterOptions = {
    gridSize: 60,
    minimumClusterSize: 10,
    averageCenter: true
};
  title = 'agmCluster';
 
  zoom:number = 1;
  markers:any = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
  ];
 
  constructor(){
 
  }
  ngOnInit(){
 

} //Calculate Function - to show image em formatted text
 calculateFunction(markers: any, numStyle: number){
 console.log(markers)
     let index: number = 0
     let title: string = "";
     let text: string = "<div style=\"position: relative; top: -4px; text-align: center; margin: 0px auto; width: 60px;\"> <div style=\"display: inline-block; width: 29px;\">{{ELEMENTS}}</div><div style=\"display: inline-block; width: 29px;\">{PROBLEMS}</div></div>";
     let qtdNodes: number = 0;
     let qtdEvents: number = 0;
     console.log(qtdEvents)
    
     console.log(markers.length)
     index = (markers.length == 0) ? 1 : 2;
   console?.log(index)
     text = text.replace( "{ELEMENTS}", qtdNodes.toString() );
     text = text.replace( "{PROBLEMS}", qtdEvents.toString() );

     return {
         text: text,
         index: index,
         title: title
     }
 }
 
}