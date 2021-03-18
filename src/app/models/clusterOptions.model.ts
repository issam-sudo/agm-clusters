export class clusterOptions {
    gridSize: number;
    minimumClusterSize: number;
    averageCenter: boolean;

    constructor(ClusterOptions: { gridSize: number; minimumClusterSize: number; averageCenter: boolean; }) {
        {
            this.gridSize = ClusterOptions.gridSize;
            this.minimumClusterSize = ClusterOptions.minimumClusterSize;
            this.averageCenter = ClusterOptions.averageCenter;
 
        }
    }
}

