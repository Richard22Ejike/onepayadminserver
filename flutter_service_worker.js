'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "df9a0abe3e6ff770486dd3e56220b70d",
".git/config": "5b0522fa7e3ca18a5bc5757b88521153",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d58f75aa830733bb174da9ec7d49b916",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7412e829b96110c0b7aaa5605f1183d7",
".git/logs/refs/heads/master": "7412e829b96110c0b7aaa5605f1183d7",
".git/logs/refs/remotes/origin/master": "b776c16940a8bcd50968b8378a132aa4",
".git/objects/01/240c9e61e1745450fd1f4e9ad772bd87094642": "201f610fe46fe6adf0b9eb6eb0b4baed",
".git/objects/02/061bc486c0568140450c1bb3829414d8ea778a": "9d9fb4019ff09c73d61d5ed04ef56fec",
".git/objects/04/0874d68fa5cd72ecfcfafc196ab70f6717e1a2": "ff18d6401ca7013306968ae090efaf16",
".git/objects/04/afce13c3871d80cb754ab5fcf48e0d37e043d6": "42ae61d225be3dfebcfb4ea3c649374d",
".git/objects/04/dacbc56b8cb0b22805422ee0c3fc02af314923": "e9c678bc40b3604d2b7a23f748909b09",
".git/objects/07/2db58319113fe59d88401731c1f08bf9d83cf2": "669644966a30a25529b24b68bf3e04a6",
".git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "f952d45dc80dbd08fc003fe402d8cab1",
".git/objects/08/639715f932227f0b842db021f98a9d46f8bd05": "0fdf567ae42010fd37f0ae5f99707758",
".git/objects/08/fdb0d4bc38519415d15b6ff52146d89c0a6371": "b23d39479cfa27a25bfca1041859f43e",
".git/objects/0a/fb555a6961c7be03f5a7efa1c996cec30615d4": "62f660059e82111e577e5b8b76ba2147",
".git/objects/0b/57094b54c42a1a7b299bad7fa86af67543c00a": "5376a283a549bb3aeba444c3921a44e9",
".git/objects/0b/81ac6f2519b02bfd0bf34ed7e7a4234ff8b251": "5acad7719d5cb4b8145ca7ca91119987",
".git/objects/0d/91641fad479d5f485479e3ef6a3dbbe8923f41": "88cf77a004afb3cd57056a76d52752d1",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/0e/8a31d915c79536c34bca930895e700a15232b5": "931ba4842591f87d9ec9322f2c366825",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/4df89b96a615445226051b889182a0510ca2d3": "31fa2ca09fbdfa1b245d5ea829684d93",
".git/objects/12/4e3420ad6ce3ed93435a3713557fd8cf3dadcc": "0d09c3a365c5950c68ef1fee3d90d47d",
".git/objects/13/2cf508f2ba1fc964192f02409f247f859db3ea": "2a3248ce3224d36163692b75c6d08145",
".git/objects/15/afd6efc7bbd671b1cb89c285663cd5b05b1a99": "46db0b91d29e01e44743855ff7bab285",
".git/objects/16/7326e6ed64555f6db7239b0e0d3e760fbfa462": "9d476ca18c479f59753dbe3f6084082d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/5c2205f6ea22dec97afb893ba2a7017f04d38a": "b306a67c3f45afe98b28183d0ebab117",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/74966e1701a2bc48081b1b772654cb46783fb0": "e8e236c755ad710ec64ff33a4385dd8f",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "56e84de8d4f05d4f4acd244e029d31e5",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/28/4be9b2a581ba401c2bd2b3efa9b1260a26c99a": "0db9026b2b72685bc305111a4266d4b8",
".git/objects/29/f3636c61f7e98b7c8d36c733589229a46bd565": "80a9695e8b546c40b597b4e2e3df84a5",
".git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "af735cbb127a9c17da67e7af2275f329",
".git/objects/2b/bbaa685612fe632a73a81e91eecf5979aecba5": "fd7323a04c91bfa3eb565830621b9540",
".git/objects/2d/28cc63d22d4662cef6e010fd386e92214055e7": "7111bc374749a510f979d2d25858ec2a",
".git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "b115a76b9e29ba2ae436865dd516dc2b",
".git/objects/2f/badeaec395680ceb598855add237d717b4705b": "421889fb9fd8c3bd91e6b26ff2b45cbb",
".git/objects/31/386adb161c76d3ded66c0af8afbccab3424dec": "5bd186dd178febae1af849e2a802e562",
".git/objects/34/9a38fff07c2b89b99d8da066cba59adc6df6f9": "87dbdfb3f09201b7ee07ebf42409e642",
".git/objects/35/816fb2d30308a44fce4970dfde0227fca1389b": "206299d952e31211e649aebf23322e26",
".git/objects/38/1d67e38ec0693f4a3bca76e52ded3564238311": "54eb54447591d2f47d2662669aadd3ba",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3d/7223824ddb5550cb12b48d8a4def53fbec8239": "46e1c8a8b648aa953da40be688f5ff0d",
".git/objects/3e/850d6ec94d4778ada71216ed17dc96dd4c1d37": "d403b208e919b290450699541f0192e4",
".git/objects/3f/189b814187d47b6fea4888c0e5f98fda7ae038": "7261f34ee1ba55821a9228333d8bdc93",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/02b9333d391476cfb3ca1eefd9843cebd5da2d": "433ed662ef328475c8acdd03543c4d20",
".git/objects/44/c944bf9d511e349ac9b20ee6062a0869abed5c": "08099f628879cc14aed9ac1e73ebfbf6",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "7f7f2e6b496f2f6ee5b053ecee44746f",
".git/objects/4c/543accccb2ca72dd839023950d13de700b1bf9": "35a5c5789cdb2f6ca293649c7179094c",
".git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "be7ae01aae5db9f4480a5eae377f822b",
".git/objects/4f/bca458e9e0a065129d0bcd5c14a0a6874aa45a": "4eecfbdf4e9a9ac908c770dd0204b9f9",
".git/objects/50/562571f5d33c150acc0e108ef4332783824b1a": "e8828956c23e395f574d26893c3c3f7b",
".git/objects/52/e83969b98a72a53292c0a87241abfe3e89cb7c": "73125007f18e0804f210f1d901430c04",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "a081683df28459ae9b8cfeb5765b138e",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "ab9b09b5c9f3e3afbb13aa4bf2d3b933",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/baf78dfe6ba51c368addd901d9aba9b05da408": "f9ec6f99a38bd1797719b6b3c2e10a7d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/ff3467b1fc0c7780ced64dc16a43e797b6dcf0": "760e53c45944b3021fa349726df200d7",
".git/objects/6d/1c858369f4b0479d43f88ebae0b208ae416e1f": "c97e1d4ca10d98b08fa23ed005f34340",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "cc05951eae87fb5f2f931ee4bac34145",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/8915d583bbbbc2176c06c1e728ab5b2492b732": "839d2d5adf6ca9bae942b629177ee7a1",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/77/3c838ec4a87d82fc4d7f2258f3a183b0813a16": "6665074f2c08399041b59fad4ff9ca97",
".git/objects/78/e3757b611c8d0a4b3101dec03bc59eb79dcaa9": "0cdb957b9e8bedd5b18780883d9bc4e3",
".git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "93bbb9450382d388ebc50dfd27c9daee",
".git/objects/79/532356fd59bffdcc13d15a31502abb2e8b077d": "ce3b9c0ddaa07a5c960fcff104078c89",
".git/objects/79/79c0a986fad77f4e0485c612fdf050df88d9e4": "bbcea70c8c2a4ba4f18188b06785f88b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "63dac58773a202f7d0f939fb2b4ee29f",
".git/objects/7f/313e0ca0300289dc0802bc638095d2fa999ac5": "161d3ae074f3193a27d464b811d929c4",
".git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "b4146fd4fbf7405c95fd7e90a4f040d7",
".git/objects/80/2e30bdecc2c68d52abf7030c056544113b2cfc": "aafdc1c8ae2ea653c5788d2d6c5d5325",
".git/objects/81/5700ef5caf127915ecd27137dceeca234deeed": "64a5f8dcfa5ca8804cd5633bae77692c",
".git/objects/81/65c76572f471cfbe4fdd0022b8e10dcadad0c2": "d4982b9415d7b8cd1922575d8ad7d09c",
".git/objects/81/8df30a30ba81b7bb36d908c430ef82711f273c": "fb7b507caf6efd22e1967d0dd882c8fe",
".git/objects/82/6389552c68e05290f76c02f3134527d72bd9a3": "304179e2576ab7dab668cca50f33c4e9",
".git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "03ede858a4fad0098a48faf0880e168a",
".git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "bee6d9c8d4422f6274d2f39789c6b1a8",
".git/objects/86/314a94c26c5b0f9fb7f259485d08f7535b4f30": "6aca5218e31cc2eafd17ae9f6a580840",
".git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "e351d7fc527a293b1096d5620807c8ab",
".git/objects/88/357d197d59c361886e5f22ecae71bbc0c862cf": "172cf2e5dd8705eab2b40d6eb604cb64",
".git/objects/88/387de040b5ca434209e051b14a73c1edd38126": "706aeed1f8f7c424323c2cebb082f9ac",
".git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "8866e49e3afaea027aeea0ee182f4101",
".git/objects/8b/f797ff93414d568aa6f0015e54ca82fe53cc86": "f77743adc4d841fa220641eb829293b4",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/20fac214ed4a61dd4e370f756b866b0d58e543": "5bfe1c59780248b29e71a8eed5c46c12",
".git/objects/8e/34742412cb172df9111a47d4ba5250d56518dd": "f94750f4298e326565b2d23b50ee37cc",
".git/objects/91/83a9c5ab00d2d8bc0aefe5ec97d12a9cca2e1a": "9d0990fe77fde0ed52210601eac449ba",
".git/objects/94/53bcdf72c11623517f3899d6723b9145cb389a": "6402346e9ff980a3017ae1e3f23c744d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/f8a24de70825c1931417ad3276ef081e7570e8": "6b038b08f32e83c0e626b4ef8ac8547e",
".git/objects/98/56a4a2f3ac8901d31cbfc94fdbaae6088f1963": "fad7c375a3ffa513a10c9710a31c5dbd",
".git/objects/98/f466a183d94f0588c87a5aee70bc557ac78492": "33a410a3162212d086f7d75a7c226903",
".git/objects/9f/c32105c076c7f8d7d98da26cd41b727a666ee9": "661edaddcaed5e512afeac2f4ca49671",
".git/objects/a0/b6b769929eca7c0e97670b41d44be4bf852676": "da82c1490bc15d6ef8ae9c8ba753fc78",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/f0be0ce974457f4e200a0a7fb491d8c0af3e93": "e4cbc3caf9684bd84cce29ec5d3b307b",
".git/objects/a2/1a31589ab340d92fb6916c5cb98934c7e3e6ce": "defc95f06c2baf86f07e016872404cfc",
".git/objects/a3/376f6b25cc2dd55dc7573edb98d3b21f7dc1e5": "3c21ab4d16183d5f066d1214177360b1",
".git/objects/a3/5531550ea1eecb2bc4d0f508a67a6edb434e16": "e16928f30c18cc10b6472646c31153c0",
".git/objects/a6/c00f170cf3e85af800050b85754e418656e9de": "da790fde9624109d0731ae9778f48f56",
".git/objects/a7/1709c17c2c58208b73e886780e5d6d28f9f4c6": "19b0bbc061d4cff7f83c8ea107d1da3c",
".git/objects/a7/b37289072798cf511ceacdae8d566cb990a248": "a344436e220e5c4468082a1fcbcc5c86",
".git/objects/ad/3cc41483e02514d3dea95fb31179d797109d8f": "3686ef3cef58317b282c4d49ed80a322",
".git/objects/ae/242e408f28b44c3770ba09b2244cbfb640c736": "265c4dc39165b5fe00da33ae7a1540bd",
".git/objects/ae/e8e730111930188ff0739b8a103093990bdaa2": "284c724d8f7f2eb2cf05d3d818dc8a59",
".git/objects/b1/ebc5a89c1ada14add4f4ae5036d0c1f7656542": "31a9e3a3b3c6532424492023669e369c",
".git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "465876c228b5981c7545e513b11c7bdc",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/5e68978a1d1ccd1ef8164c760f2548d38877fa": "08b75fc5634b1274b5da480de7298a01",
".git/objects/b7/8c81bd9884fb220ebe674dd5404f758a147d47": "8e851a0a3cc534c559480a3ee35a9476",
".git/objects/b8/25f6ffccc1ed2ee6b019318781f811bed83526": "6e48ec3ab5d749b7221726dff1564b0f",
".git/objects/b8/35426e1aa8021acc16facfc5eab6134ca0524c": "3f3087685ffb03adb264edbc50c0d4c8",
".git/objects/ba/be2a86c38cc19fcb96a3f0ca9977c0b5790dba": "eb8cab278933bc865511be8ad54df9d5",
".git/objects/bd/569d8c6642f29d07fea733c457883c7062e2db": "0e52806fd3e73faafcf7d9f05998e211",
".git/objects/be/06a4025e682a99a9ba929dd653d5fec4246917": "68e77ec1f40017dda5eb4be6412b4b0c",
".git/objects/be/6690b36cce7d3206b2d1eefcde0912f1101048": "d92545d4116dfec51a60ff3b643fea26",
".git/objects/bf/8f1600d0d11e33c616a2a92f494ccf05625eef": "67ac1d3bc294dae82ca7708b6539315d",
".git/objects/c1/8be9348e4783ca54da0d9039066fc9bc7bfa5e": "dcbcdfdf2b5eba8c3fd8778088a8cf1a",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c3/fee181af5d7450de6d2f21c9e552ae0f282381": "01db537d077795f57fd8e67dddf10418",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/a693a79e41c400a26d89d0ebd148caad8c08fb": "c9535ec0e58067a506607ce8923bcb56",
".git/objects/cd/cf627ab21b2eca24d9f1b225b91f24d5129925": "ee941422eccae87c6ef4cd08cf1b1dcb",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/8cdb6da09e3599b71853d24c6bce95dbdb12ca": "9ea4ff4d3661f0ffa645622134857752",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/46c8574bfccc279386d093396ad1ef9bb792ae": "3354641d18389082314f50b0b678f581",
".git/objects/d5/4fe339f59579300732cc48f6db4ead21b70dfb": "53cd26afe106a1c017b035ab47837ccc",
".git/objects/dc/7be623db5dd7b0580e2b532c8efe0f0c1082f9": "014f9ff4c5ee4ecea3d7d1dc3732529a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/9b665234609b6abb863239bc2f1ca5dfa69717": "586f00db4f9fc0f062e6b1243d050b48",
".git/objects/e8/fa207439281059574173aa4acda62b8323161d": "e398dc8c82ce0acdecfe7b52fd161913",
".git/objects/e9/628110877cc36ec32b8096c7e8a9dfb67cabbc": "d0fd5970d98db89372c1cddc0a9bbb96",
".git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "4c61666f11016f57e1bdee8fb18dab77",
".git/objects/eb/709d6f3bc29bd4c96ad09587e718867635d79f": "45405e986c29953d28574d29d7992bbf",
".git/objects/ee/c753bdd9aa484f43cd9f495add7612487845e9": "9cc091aa80339b9bb65baabb8563a8d8",
".git/objects/ef/537d4ee0bced9e238d07336ceadb6585df65ad": "ad737bbc7e76cc84f7626b02facc3d4e",
".git/objects/ef/a96dea68d84ccdd6a458ce1f31021982c8831d": "e9c4db9f83a1d368b148067540c9c604",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7bf2f20fa254fbb3da3810d7fd82d474470eb4": "6977b7083042c1055faf2e09e6cfe01e",
".git/objects/f3/294297f7b9eb72cd8ae25ec8058e6aea3bfc48": "63b96f309c1f4b3a92bec4a41edd11cf",
".git/objects/f4/55fb590af6efb7ecb9c69b67955fdd80489e3f": "9ed6f8ae29dbb6cf161a87e973c92258",
".git/objects/f7/e3023dae0dc3661116b2270636a7c76534924c": "ef377a61c065af09fea2ef533726042f",
".git/objects/fd/679030f3afb29590d46be6da02b32aa7c1dcbc": "c8cf4530164628fe45dea8ef1c103d2c",
".git/refs/heads/master": "40288c679b1df013b0a5161d1782edbb",
".git/refs/remotes/origin/master": "40288c679b1df013b0a5161d1782edbb",
".idea/workspace.xml": "f4ce1b75fe0e809d2740dfbd85d0c90c",
"assets/AssetManifest.bin": "dc16b6e3fbfa9a408e71d27449d16414",
"assets/AssetManifest.bin.json": "711c2e8743d50b1dd0e8c6837b2eccc1",
"assets/AssetManifest.json": "2ca33430d291ccdfcdda3b7b0c254ef0",
"assets/assets/9mobile.png": "98f5cef448f4097498840267f4f542d3",
"assets/assets/9modile.svg": "48d0fdbc8e1d62a01859397cee028cb3",
"assets/assets/airtel.png": "e84cf642febb1c7cc970aeca375f2b99",
"assets/assets/airtel.svg": "1e29f4288343f19e18bb9232b2f0d389",
"assets/assets/alert-circle-down.svg": "14f3e574ba235bb59470543520d4724b",
"assets/assets/alert-circle-up.svg": "0c68ba8e3a4abd6aa71b9f24840014b7",
"assets/assets/alert-circle.svg": "e1f66e09d6ce7980ce623258f7d23ee9",
"assets/assets/arrow-down.svg": "d716a0a5e3e9a70ad5b6ec59b283016a",
"assets/assets/arrow-up.svg": "d85f0a68595491802ada2a16c3242521",
"assets/assets/background.svg": "e6d8f7db945fb8c0927904d6cdd0b6e2",
"assets/assets/backgroundescrow.png": "63332f4a68125ce97f74e02ded9bac01",
"assets/assets/bag.svg": "9dc61338ec9be80a289fc36af2c4a02a",
"assets/assets/ball.svg": "9122a93ef4a7be72ec90cad37cd52044",
"assets/assets/bell.svg": "94cf56b5dcda835d1b27bc161d3628ab",
"assets/assets/biometric.png": "53a795af7eb5703bef63ff0c0fbde0bd",
"assets/assets/brownCircle.svg": "626394b52aec80f3ea97ebbef06e203b",
"assets/assets/bulb.svg": "1a34d8d3fe801cd9be31924085ea39fc",
"assets/assets/call-ringing.svg": "cd1d1c9e59555e293a703cf2d6f2e815",
"assets/assets/camera.svg": "a991dd3795ba678630f45e26489de0b3",
"assets/assets/card.svg": "6dbed4cc755ca753876d7b22c1abb913",
"assets/assets/check-circle.svg": "998c487ded19f27452c8b00d2752f332",
"assets/assets/chevron-right.svg": "79c0802a90d7b1dbb9d8298f0f309225",
"assets/assets/cloud-upload.png": "98ea2cac5a4d1831a5fe23626fb96c26",
"assets/assets/cloud-upload.svg": "1e9f4b3daff7168a10650c562282f335",
"assets/assets/confetti.svg": "ced26bc9ba0ee9af2e8a50ee9ab92428",
"assets/assets/copy.svg": "df28e07206ff279d0db4b31a0ac72ff8",
"assets/assets/divider.png": "fa69575819da0afa5285f05023d12146",
"assets/assets/DSTV.jpg": "9542f3cee7feedb84a54184ea7b8a56d",
"assets/assets/DSTV.svg": "274831e01bf42e401c9d57211b6ad9cc",
"assets/assets/eye-slash.svg": "921b40348cc6d6babf23c0a064582253",
"assets/assets/file.svg": "b96dfb6bf55ca93307e519a10fb818bc",
"assets/assets/flashpay.svg": "a9f7d41ec785df3572743919e68fd255",
"assets/assets/glo.jpeg": "7c51e108057d1f37ee27551f560a3464",
"assets/assets/glo.png": "bc759f08a5a132a22b8dc22e1e8f4802",
"assets/assets/glo.svg": "844b891da0a88550322feba5d083dcbd",
"assets/assets/go.jpg": "7d087cbc80a8bf1639bb0df2960e1517",
"assets/assets/good.jpeg": "f1474650beccf4bbf49bd9a991685088",
"assets/assets/GOtv.png": "c417ce67a51d9d980eb776311c0ee032",
"assets/assets/GOtv.svg": "66b0eed49bcacbfa1f6a9f58e1c64522",
"assets/assets/headset.svg": "576b11d076c6c6c2763b4a8ba6c09d89",
"assets/assets/home.svg": "5c819245f150c38d3c59ac72f85864e5",
"assets/assets/homebackground.svg": "50b2b26103d9ed246f404ac20ceec259",
"assets/assets/icons.png": "9c55daf8297fce5f564044665dce93a3",
"assets/assets/lock.svg": "d1d80565ce0b399c696e62104728f337",
"assets/assets/message-alt.svg": "b8adf9428ffe1acf71d6950b5dc5f8c5",
"assets/assets/mtn.png": "b38fb91eaf15608ca13c8bdaa18c69ce",
"assets/assets/mtn.svg": "2f390d2da49dc15c3c4a82d377d5b88d",
"assets/assets/nearme.gif": "8653c84f7427d7c7383a89cc8cbadd7b",
"assets/assets/nearme.png": "5730bf38c591f63bd34f8cfebdbc244d",
"assets/assets/oneplug.svg": "ff85e1c478af631355fb6b518d78dd73",
"assets/assets/oneplugpaylogo.svg": "62e708a5abe926451158e7e02d869ffb",
"assets/assets/pic.jpg": "fa0363168588af9b30940df72928f7d5",
"assets/assets/pic.svg": "3cf69ede3227c01a727b4f9f3dd66444",
"assets/assets/pindot.svg": "e719299b536dce12cfb88d61c77b143f",
"assets/assets/pindotactive.svg": "f8bd091bc5f324be374765ee8f24ad92",
"assets/assets/plus.svg": "621399de374e3a99ff51504b7d4b06a1",
"assets/assets/Portraitwoman.png": "618ebf58bc20117b49abea11bcd3d46c",
"assets/assets/profile.png": "d0265dd4448b9f25881dd3b7f27c890c",
"assets/assets/radio-button-active.svg": "c4a536e2d148517c19dfeb747ec042c2",
"assets/assets/radio-button.svg": "76599021691d28f8fc6686032e847f5f",
"assets/assets/scan.svg": "f15a7e006be0eedc2525108dc43adb8d",
"assets/assets/send-alt.svg": "24a41d0631d67db826d3707d3c71b392",
"assets/assets/shadow.png": "380fae2007cc4cc0e4f341cfded53575",
"assets/assets/share.svg": "e7b0bb75ebd1a7227306329aad7a9955",
"assets/assets/shield-tick.svg": "58951293fc363b41565a5aaa582b497b",
"assets/assets/sign-out.svg": "1d099eb6bfd897635c7a0e71e2194b3f",
"assets/assets/startime.png": "93af562626db9f341a3f673045200514",
"assets/assets/switch-diagonal.svg": "2488ea80aa926cab90f310dfadcce699",
"assets/assets/switch-horizontal.svg": "93fd0ee0f01a3c90ff81759804941cd3",
"assets/assets/tabler_wifi.svg": "7edab4e496044cded39d10e5a19187e3",
"assets/assets/tv.jpg": "2778974a89a18e030b58fd8d0b2ae157",
"assets/assets/tv.svg": "1ca4de5a26063dd7f5a9dd50ca873ec1",
"assets/assets/user.svg": "d7c5012f409c7765288d82bba52fa556",
"assets/assets/Visa.svg": "64d75a39f548428cc619c28ac39451da",
"assets/assets/wallet.svg": "f2ec083eddcdbc489e1da326d7eb2f7b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9af7cb3dd0debb36bfe401f8609b772b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e27bf091099bc4e9dac4642b37547db1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d63af2056ee0fa048bd93bada75d9879",
"icons/Icon-192.png": "59c747262f88aa2a1930a1d560307fd3",
"icons/Icon-512.png": "9f1d7b436292afd081fb37baa409c8e8",
"icons/Icon-maskable-192.png": "59c747262f88aa2a1930a1d560307fd3",
"icons/Icon-maskable-512.png": "9f1d7b436292afd081fb37baa409c8e8",
"index.html": "c5f386b05a4ce1ecb8f5445087939263",
"/": "c5f386b05a4ce1ecb8f5445087939263",
"main.dart.js": "64d34995152eaa821d287c3642bc19c1",
"manifest.json": "533ad42e6d9bf5ee08ab60c99909e414",
"version.json": "ed1e7119eec9e653d463931f5ee595f6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
