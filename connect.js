const router = require('express').Router();
Connect = {
        loading: false,
        contracts: {},

        load: async() => {
            await Connect.loadWeb3()
            await Connect.loadAccount()
            await Connect.loadContract()
            console.log("hi")
        },

        loadWeb3: async() => {
            if (typeof web3 !== "undefined") {
                Connect.web3Provider = web3.currentProvider
                web3 = new Web3(web3.currentProvider)
                web3.eth.defaultAccount = web3.eth.accounts[0]
                console.log(web3.eth.defaultAccount)
            } else {
                window.alert("Please connect to Metamask.")
            }

            // Modern dConnect browsers...
            if (window.ethereum) {
                window.web3 = new Web3(ethereum)
                try {
                    // Request account access if needed
                    await ethereum.enable()
                        // Acccounts now exposed
                    web3.eth.sendTransaction({ /* ... */ })
                } catch (error) {
                    // User denied account access...
                }
            }

            // Legacy dConnect browsers...
            else if (window.web3) {
                Connect.web3Provider = web3.currentProvider
                window.web3 = new Web3(web3.currentProvider)
                    // Acccounts always exposed
                web3.eth.sendTransaction({ /* ... */ })
            }

            // Non-dConnect browsers...
            else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
            }
        },

        loadAccount: async() => {
            Connect.account = web3.eth.accounts[0] // setting bc account
                //console.log(Connect.account)
        },

        /*
	setLoading: (boolean) => {
		App.loading = boolean
		const loader = $('#loader')
		const content = $('#content')
		if(boolean) {
			loader.show()
			content.hide()
		}
		else {
			loader.hide()
			content.show()
		}
	},
    */

        loadContract: async() => {
            const threeDModel = await $.getJSON('ThreeDModel.json')
                //console.log(threeDModel)
            Connect.contracts.ThreeDModel = TruffleContract(threeDModel)
            Connect.contracts.ThreeDModel.setProvider(Connect.web3Provider)
            Connect.threeDModel = await Connect.contracts.ThreeDModel.deployed() // get values from bc
        },

        addModel: async() => {
            //Connect.setLoading(true);
            //const content = $('#newTask').val()
            //await Connect.todoList.createTask(content)
            //const model = getJson();
            /*router.get('http://3.7.222.30:5000/api/model/:name/:creator', (req, res) => {
                async function getJson() {
                    const jsonmodel = { name: req.params.name, creator: req.params.creator };
                    //const jsonmodel = await model.find().select({ name: 1, creator: 1 });
                    res.send(JSON.stringify(jsonmodel));
                    return jsonmodel;
                }
                const modelInfo = getJson();
            });
            //const modelInfo = getJson();*/
            router.post('/api/model/', (req, res) => {
                const modelName = req.body.name;
                const modelCreator = req.body.creator;
                //await Connect.threeDModel.addModel(modelName, modelCreator);
                console.log("done");
                window.location.reload();
            });
            //const modelName = "ice";
            //const creator = "k";

        }
    }
    /*
    $(() => {
        $(window).load(() => {
            App.load()
        });
    });
    */
module.exports = router;