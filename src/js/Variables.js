/*!
MolView v2.2 (http://molview.org)
Copyright (c) 2014, Herman Bergwerf
ALL RIGHTS RESERVED
*/
"use strict";

var JmolAtomColors = { "H": 0xFFFFFF,"He": 0xD9FFFF,"Li": 0xCC80FF,"Be": 0xC2FF00,"B": 0xFFB5B5,"C": 0x909090,"N": 0x3050F8,"O": 0xFF0D0D,"F": 0x90E050,"Ne": 0xB3E3F5,"Na": 0xAB5CF2,"Mg": 0x8AFF00,"Al": 0xBFA6A6,"Si": 0xF0C8A0,"P": 0xFF8000,"S": 0xFFFF30,"Cl": 0x1FF01F,"Ar": 0x80D1E3,"K": 0x8F40D4,"Ca": 0x3DFF00,"Sc": 0xE6E6E6,"Ti": 0xBFC2C7,"V": 0xA6A6AB,"Cr": 0x8A99C7,"Mn": 0x9C7AC7,"Fe": 0xE06633,"Co": 0xF090A0,"Ni": 0x50D050,"Cu": 0xC88033,"Zn": 0x7D80B0,"Ga": 0xC28F8F,"Ge": 0x668F8F,"As": 0xBD80E3,"Se": 0xFFA100,"Br": 0xA62929,"Kr": 0x5CB8D1,"Rb": 0x702EB0,"Sr": 0x00FF00,"Y": 0x94FFFF,"Zr": 0x94E0E0,"Nb": 0x73C2C9,"Mo": 0x54B5B5,"Tc": 0x3B9E9E,"Ru": 0x248F8F,"Rh": 0x0A7D8C,"Pd": 0x006985,"Ag": 0xC0C0C0,"Cd": 0xFFD98F,"In": 0xA67573,"Sn": 0x668080,"Sb": 0x9E63B5,"Te": 0xD47A00,"I": 0x940094,"Xe": 0x429EB0,"Cs": 0x57178F,"Ba": 0x00C900,"La": 0x70D4FF,"Ce": 0xFFFFC7,"Pr": 0xD9FFC7,"Nd": 0xC7FFC7,"Pm": 0xA3FFC7,"Sm": 0x8FFFC7,"Eu": 0x61FFC7,"Gd": 0x45FFC7,"Tb": 0x30FFC7,"Dy": 0x1FFFC7,"Ho": 0x00FF9C,"Er": 0x00E675,"Tm": 0x00D452,"Yb": 0x00BF38,"Lu": 0x00AB24,"Hf": 0x4DC2FF,"Ta": 0x4DA6FF,"W": 0x2194D6,"Re": 0x267DAB,"Os": 0x266696,"Ir": 0x175487,"Pt": 0xD0D0E0,"Au": 0xFFD123,"Hg": 0xB8B8D0,"Tl": 0xA6544D,"Pb": 0x575961,"Bi": 0x9E4FB5,"Po": 0xAB5C00,"At": 0x754F45,"Rn": 0x428296,"Fr": 0x420066,"Ra": 0x007D00,"Ac": 0x70ABFA,"Th": 0x00BAFF,"Pa": 0x00A1FF,"U": 0x008FFF,"Np": 0x0080FF,"Pu": 0x006BFF,"Am": 0x545CF2,"Cm": 0x785CE3,"Bk": 0x8A4FE3,"Cf": 0xA136D4,"Es": 0xB31FD4,"Fm": 0xB31FBA,"Md": 0xB30DA6,"No": 0xBD0D87,"Lr": 0xC70066,"Rf": 0xCC0059,"Db": 0xD1004F,"Sg": 0xD90045,"Bh": 0xE00038,"Hs": 0xE6002E,"Mt": 0xEB0026 };
var JmolAtomColorsCSS = { "H":"#000000","He":"#849b9b","Li":"#c87efa","Be":"#82ab00","B":"#c38a8a","C":"#000000","N":"#304ff7","O":"#ff0d0d","F":"#6dab3c","Ne":"#7b9ca8","Na":"#ab5cf2","Mg":"#61b400","Al":"#a79191","Si":"#b09276","P":"#ff8000","S":"#c39517","Cl":"#1dc51d","Ar":"#63a2b0","K":"#8f40d4","Ca":"#2fc300","Sc":"#969696","Ti":"#94969a","V":"#96969a","Cr":"#8796c3","Mn":"#9c7ac7","Fe":"#e06633","Co":"#db8293","Ni":"#45b645","Cu":"#c78033","Zn":"#7d80b0","Ga":"#bd8c8c","Ge":"#668f8f","As":"#bd80e3","Se":"#e28f00","Br":"#a62929","Kr":"#53a6bc","Rb":"#702eb0","Sr":"#00d000","Y":"#5fa4a4","Zr":"#6ba2a2","Nb":"#61a4a9","Mo":"#4ea9a9","Tc":"#3b9e9e","Ru":"#248f8f","Rh":"#0a7d8c","Pd":"#006985","Ag":"#969696","Cd":"#ae9462","In":"#a67573","Sn":"#668080","Sb":"#9e63b5","Te":"#d47a00","I":"#940094","Xe":"#429eb0","Cs":"#57178f","Ba":"#00c900","La":"#57a4c5","Ce":"#989877","Pr":"#869d7b","Nd":"#7da07d","Pm":"#69a581","Sm":"#5ea883","Eu":"#43b089","Gd":"#31b48d","Tb":"#23b890","Dy":"#17bb92","Ho":"#00c578","Er":"#00c765","Tm":"#00c94e","Yb":"#00bf38","Lu":"#00ab24","Hf":"#42a8dc","Ta":"#4ba2f9","W":"#2194d6","Re":"#267dab","Os":"#266696","Ir":"#175487","Pt":"#9595a0","Au":"#b9981a","Hg":"#9595a9","Tl":"#a6544d","Pb":"#575961","Bi":"#9e4fb5","Po":"#ab5c00","At":"#754f45","Rn":"#428296","Fr":"#420066","Ra":"#007d00","Ac":"#669ce4","Th":"#00b8fc","Pa":"#00a1ff","U":"#008fff","Np":"#0080ff","Pu":"#006bff","Am":"#545cf2","Cm":"#785ce3","Bk":"#8a4fe3","Cf":"#a136d4","Es":"#b31fd4","Fm":"#B31FBA","Md":"#B30DA6","No":"#BD0D87","Lr":"#C70066","Rf":"#CC0059","Db":"#D1004F","Sg":"#D90045","Bh":"#E00038","Hs":"#E6002E","Mt":"#EB0026","Ds":"#9595a0","Rg":"#b9981a","Cn":"#9595a9" };

//Model default data
var defaultMol2D = 
[
"C8H10N4O2","APtclcactv04181408232D 0   0.00000     0.00000"," "," 24 25  0  0  0  0  0  0  0  0999 V2000","    2.8660    0.5000    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0","    2.0000    1.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0","    2.8660   -0.5000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0","    2.0000   -1.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0","    3.7321   -1.0000    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0","    3.7321   -2.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0","    4.5981   -0.5000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0","    5.5443   -0.8047    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0","    6.1279    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0","    5.5443    0.8047    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0","    5.8550    1.7553    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0","    4.5981    0.5000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0","    3.7321    1.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0","    3.7321    2.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0","    2.3100    1.5369    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","    1.4631    1.3100    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","    1.6900    0.4631    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","    3.1121   -2.0000    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","    3.7321   -2.6200    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","    4.3521   -2.0000    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","    6.7479   -0.0000    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","    6.4443    1.5626    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","    6.0476    2.3446    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","    5.2656    1.9479    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0","  1  2  1  0  0  0  0","  1  3  1  0  0  0  0","  3  4  2  0  0  0  0","  3  5  1  0  0  0  0","  5  6  1  0  0  0  0","  5  7  1  0  0  0  0","  7  8  1  0  0  0  0","  8  9  2  0  0  0  0","  9 10  1  0  0  0  0"," 10 11  1  0  0  0  0"," 10 12  1  0  0  0  0","  7 12  2  0  0  0  0"," 12 13  1  0  0  0  0","  1 13  1  0  0  0  0"," 13 14  2  0  0  0  0","  2 15  1  0  0  0  0","  2 16  1  0  0  0  0","  2 17  1  0  0  0  0","  6 18  1  0  0  0  0","  6 19  1  0  0  0  0","  6 20  1  0  0  0  0","  9 21  1  0  0  0  0"," 11 22  1  0  0  0  0"," 11 23  1  0  0  0  0"," 11 24  1  0  0  0  0","M  END","$$$$"
].join("\n");

var defaultMol3D = 
[
"C8H10N4O2","APtclcactv04181408293D 0   0.00000     0.00000"," "," 24 25  0  0  0  0  0  0  0  0999 V2000","    1.3120   -1.0479    0.0025 N   0  0  0  0  0  0  0  0  0  0  0  0","    2.2465   -2.1762    0.0031 C   0  0  0  0  0  0  0  0  0  0  0  0","    1.7906    0.2081    0.0010 C   0  0  0  0  0  0  0  0  0  0  0  0","    2.9938    0.3838    0.0002 O   0  0  0  0  0  0  0  0  0  0  0  0","    0.9714    1.2767   -0.0001 N   0  0  0  0  0  0  0  0  0  0  0  0","    1.5339    2.6294   -0.0017 C   0  0  0  0  0  0  0  0  0  0  0  0","   -0.4026    1.0989   -0.0001 C   0  0  0  0  0  0  0  0  0  0  0  0","   -1.4446    1.9342   -0.0010 N   0  0  0  0  0  0  0  0  0  0  0  0","   -2.5608    1.2510   -0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0","   -2.2862   -0.0680    0.0015 N   0  0  0  0  0  0  0  0  0  0  0  0","   -3.2614   -1.1612    0.0029 C   0  0  0  0  0  0  0  0  0  0  0  0","   -0.9114   -0.1939    0.0014 C   0  0  0  0  0  0  0  0  0  0  0  0","   -0.0163   -1.2853   -0.0022 C   0  0  0  0  0  0  0  0  0  0  0  0","   -0.4380   -2.4279   -0.0068 O   0  0  0  0  0  0  0  0  0  0  0  0","    3.2697   -1.8004    0.0022 H   0  0  0  0  0  0  0  0  0  0  0  0","    2.0830   -2.7828    0.8938 H   0  0  0  0  0  0  0  0  0  0  0  0","    2.0821   -2.7846   -0.8862 H   0  0  0  0  0  0  0  0  0  0  0  0","    2.6223    2.5703   -0.0019 H   0  0  0  0  0  0  0  0  0  0  0  0","    1.1987    3.1611   -0.8923 H   0  0  0  0  0  0  0  0  0  0  0  0","    1.1990    3.1632    0.8877 H   0  0  0  0  0  0  0  0  0  0  0  0","   -3.5520    1.6797   -0.0001 H   0  0  0  0  0  0  0  0  0  0  0  0","   -3.5037   -1.4333   -1.0244 H   0  0  0  0  0  0  0  0  0  0  0  0","   -2.8389   -2.0244    0.5173 H   0  0  0  0  0  0  0  0  0  0  0  0","   -4.1672   -0.8395    0.5168 H   0  0  0  0  0  0  0  0  0  0  0  0","  1  2  1  0  0  0  0","  1  3  1  0  0  0  0","  3  4  2  0  0  0  0","  3  5  1  0  0  0  0","  5  6  1  0  0  0  0","  5  7  1  0  0  0  0","  7  8  1  0  0  0  0","  8  9  2  0  0  0  0","  9 10  1  0  0  0  0"," 10 11  1  0  0  0  0"," 10 12  1  0  0  0  0","  7 12  2  0  0  0  0"," 12 13  1  0  0  0  0","  1 13  1  0  0  0  0"," 13 14  2  0  0  0  0","  2 15  1  0  0  0  0","  2 16  1  0  0  0  0","  2 17  1  0  0  0  0","  6 18  1  0  0  0  0","  6 19  1  0  0  0  0","  6 20  1  0  0  0  0","  9 21  1  0  0  0  0"," 11 22  1  0  0  0  0"," 11 23  1  0  0  0  0"," 11 24  1  0  0  0  0","M  END","$$$$"
].join("\n");

//xhr for loading; only one AJAX request at a time
var xhr;