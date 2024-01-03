export namespace main {
	
	export class HexDecBin {
	    Hex: string;
	    Dec: string;
	    Bin: string;
	
	    static createFrom(source: any = {}) {
	        return new HexDecBin(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Hex = source["Hex"];
	        this.Dec = source["Dec"];
	        this.Bin = source["Bin"];
	    }
	}
	export class ValueData {
	    Value: HexDecBin;
	    ComplementValue: HexDecBin;
	
	    static createFrom(source: any = {}) {
	        return new ValueData(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Value = this.convertValues(source["Value"], HexDecBin);
	        this.ComplementValue = this.convertValues(source["ComplementValue"], HexDecBin);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

