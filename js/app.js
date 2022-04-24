var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit,
        method: ''
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            switch(this.method)
            {
                case "BL":
                    {
                        this.encodedBits = getManchesterLevelEncoding(this.bits);
                    }break;
                case "NRZL":
                    {
                        this.encodedBits = getNRZL(this.bits);
                    }break;
                case "NRZM":
                    {
                        this.encodedBits = getNRZM(this.bits);
                    }break;
                case "NRZS":
                    {
                        this.encodedBits = getNRZS(this.bits);
                    }break;
                case "RZ":
                    {
                        this.encodedBits = getRZ(this.bits);
                    }break;
                case "BM":
                    {
                        this.encodedBits = getBM(this.bits);
                    }break;
                case "BS":
                    {
                        this.encodedBits = getBS(this.bits);
                    }break;
                case "BLDIF":
                    {
                        this.encodedBits = getBLDIF(this.bits);
                    }break;
                case "DELAY":
                    {
                        this.encodedBits = getDELAY(this.bits);
                    }break;
                
                
                
                
                
        }
        }

    }
})


