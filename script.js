phase = document.getElementById("phase")
length_text = document.getElementById("length_text")
length = document.getElementById("length")
oh_wp = document.getElementById("oh_wp")
posts_text = document.getElementById("posts")
stays_text = document.getElementById("stays")
pr = document.getElementById("pr")
pi = document.getElementById("pi")
ht_stay = document.getElementById("ht_stay")
lt_stay = document.getElementById("lt_stay")
ht_strut = document.getElementById("ht_strut")
lt_strut = document.getElementById("lt_strut")
wpsp = document.getElementById("wpsp")
tariff = document.getElementById("tariff")
cl = document.getElementById("cl")
sd_text = document.getElementById("sd")
ecsc_text = document.getElementById("ecsc")
cgst_text = document.getElementById("cgst")
sgst_text = document.getElementById("sgst")
total_text = document.getElementById("total")
let posts = 0;
let stays = 0;
let sd;
let ecsc;
let cgst;
let sgst;
let total;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sum5 = 0;
let sum6 = 0;
let sum7 = 0;
let sum8 = 0;
let sum9 = 0;
let sum10 = 0;
setInterval(function(){
    if(oh_wp.value == "oh"){
        length_text.innerHTML = "Enter OH length"
        if(parseInt(length.value)<51){
            posts_text.innerHTML = "No of Posts included = 1"
            posts = 1
        }
        if(parseInt(length.value)<101){
            if(parseInt(length.value)>49){
                posts_text.innerHTML = "No of Posts included = 2"
                posts = 2
            }
        }
        if(parseInt(length.value)<151){
            if(parseInt(length.value)>99){
                posts_text.innerHTML = "No of Posts included = 3"
                posts = 3
            }
        }
        if(parseInt(length.value)<201){
            if(parseInt(length.value)>149){
                posts_text.innerHTML = "No of Posts included = 4"
                posts = 4
            }
        }
        if(posts>2){
            stays = posts-1
            stays_text.innerHTML = "No of Stays included = "+stays
        }
        if(posts<=2){
            stays = posts
            stays_text.innerHTML = "No of Stays included = "+stays
        }
    }
    if(oh_wp.value == "wp"){
        length_text.innerHTML = "Enter WP length"
        posts_text.innerHTML = ""
        stays_text.innerHTML = ""
        posts = 0
        stays = 0
    }
    if(tariff.value == "1A"){
        sd = 300*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "4A"){
        sd = 500*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "4B"){
        sd = 500*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "5A"){
        sd = 200*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "5B"){
        sd = 200*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "6A"){
        sd = 1000*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "6B"){
        sd = 1000*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "6C"){
        sd = 1000*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "6D"){
        sd = 1000*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "6G"){
        sd = 1000*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "6F"){
        sd = 1000*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "7A"){
        sd = 1000*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "7B"){
        sd = 1000*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(tariff.value == "8B"){
        sd = 0*parseInt(cl.value);
        sd_text.innerHTML = "SD = "+sd
    }
    if(parseInt(phase.value) == 1){
        if(oh_wp.value=="oh"){
            if(posts==1){
                sum1 = 9160;
                sum2 = parseInt(length.value)*80
            }
            if(posts==2){
                sum1 = 21950;
                sum2 = (parseInt(length.value)-50)*80
            }
            if(posts==3){
                sum1 = 34450;
                sum2 = (parseInt(length.value)-100)*80
            }
            if(posts==4){
                sum1 = 46750;
                sum2 = (parseInt(length.value)-150)*80
            }
        }
        sum3 = parseInt(pr.value)*6700;
        if(pi.value=="not_needed"){
            sum4 = 0
        }
        if(pi.value=="1ph_without_stay"){
            sum4 = 6700
        }
        if(pi.value=="1ph_with_stay"){
            sum4 = 8170
        }
        if(pi.value=="1ph_with_strut"){
            sum4 = 13200
        }
        if(pi.value=="3ph_without_stay"){
            sum4 = 7730
        }
        if(pi.value=="3ph_with_stay"){
            sum4 = 9200
        }
        if(pi.value=="3ph_with_strut"){
            sum4 = 13850
        }
        if(pi.value=="ht/lt_without_stay"){
            sum4 = 14600
        }
        if(pi.value=="ht/lt_with_stay"){
            sum4 = 15870
        }
        if(pi.value=="ht/lt_with_strut"){
            sum4 = 17850
        }
        sum5 = parseInt(ht_stay.value)*2310
        sum6 = parseInt(lt_stay.value)*1750
        sum7 = parseInt(ht_strut.value)*9100
        sum8 = parseInt(lt_strut.value)*6500
        sum9 = parseInt(wpsp.value)*5540
        if(parseInt(cl.value)<6){
            sum10 = 1740
        }
        if(parseInt(cl.value)<11){
            if(parseInt(cl.value)>4){
                sum10 = 4220
            }
        }
        if(parseInt(cl.value)<26){
            if(parseInt(cl.value)>9){
                sum10 = 14420
            }
        }
        if(parseInt(cl.value)<31){
            if(parseInt(cl.value)>24){
                sum10 = 21750
            }
        }
    }
    if(parseInt(phase.value)==3){
        if(oh_wp.value == "oh"){
            if(posts==1){
                sum1 = 11550
                sum2 = parseInt(length.value)*160
            }
            if(posts==2){
                sum1 = 28800
                sum2 = (parseInt(length.value)-50)*160
            }
            if(posts==3){
                sum1 = 46600
                sum2 = (parseInt(length.value)-100)*160
            }
            if(posts==4){
                sum1 = 64100
                sum2 = (parseInt(length.value)-150)*160
            }
        }
        sum3 = parseInt(pr.value)*7730
        if(pi.value=="1ph_without_stay"){
            sum4 = 6700
        }
        if(pi.value=="1ph_with_stay"){
            sum4 = 8170
        }
        if(pi.value=="1ph_with_strut"){
            sum4 = 13200
        }
        if(pi.value=="3ph_without_stay"){
            sum4 = 7730
        }
        if(pi.value=="3ph_with_stay"){
            sum4 = 9200
        }
        if(pi.value=="3ph_with_strut"){
            sum4 = 13850
        }
        if(pi.value=="ht/lt_without_stay"){
            sum4 = 14600
        }
        if(pi.value=="ht/lt_with_stay"){
            sum4 = 15870
        }
        if(pi.value=="ht/lt_with_strut"){
            sum4 = 17850
        }
        sum5 = parseInt(ht_stay.value)*2310
        sum6 = parseInt(lt_stay.value)*1750
        sum7 = parseInt(ht_strut.value)*9100
        sum8 = parseInt(lt_strut.value)*6500
        sum9 = parseInt(wpsp.value)*5540
        if(parseInt(cl.value)<11){
            sum10 = 4220
        }
        if(parseInt(cl.value)<26){
            if(parseInt(cl.value)>9){
                sum10 = 14420
            }
        }
        if(parseInt(cl.value)<31){
            if(parseInt(cl.value)>24){
                sum10 = 21750
            }
        }
    }
    if(oh_wp.value=="oh"){
        ecsc = Math.round(sum1+sum2+sum3+sum4+sum5+sum6+sum7+sum8+sum9+sum10)
    }
    if(oh_wp.value=="wp"){
        ecsc = Math.round(sum3+sum4+sum5+sum6+sum7+sum8+sum9+sum10)
    }
    ecsc_text.innerHTML = "ECSC = "+ecsc
    cgst = Math.round(ecsc*0.09)
    cgst_text.innerHTML = "CGST = "+cgst
    sgst = Math.round(ecsc*0.09)
    sgst_text.innerHTML = "SGST = "+sgst
    total = sd+ecsc+cgst+sgst;
    total_text.innerHTML = "Total = "+total
},50)