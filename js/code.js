function doc_so(num) {
    if (num == "1")
        return "Một ";
    if (num == "2")
        return "Hai ";
    if (num == "3")
        return "Ba ";
    if (num == "4")
        return "Bốn ";
    if (num == "5")
        return "Năm ";
    if (num == "6")
        return "Sáu ";
    if (num == "7")
        return "Bảy ";
    if (num == "8")
        return "Tám ";
    if (num == "9")
        return "Chín ";
    return "Không ";
}
//
function doc_hang_chuc(s) {
    var number_temp = "";
    if (s.charAt(0) == '1') {
        //System.out.print("Muoi ");
        number_temp = number_temp + "Mười ";
        if (s.charAt(1) != '0') {
            if (s.charAt(1) == '5')
                number_temp = number_temp + "Lăm ";
            else if (s.charAt(1) == '1')
                number_temp = number_temp + "Mốt ";
            else
                number_temp = number_temp + doc_so(s.charAt(1));
            // doc_so(s.charAt(1));
        }
    } else {
        if (s.charAt(0) == '0') {
            //System.out.print("Linh ");
            number_temp = number_temp + doc_so(s.charAt(1));
        } else {
            number_temp = number_temp + doc_so(s.charAt(0));
            //System.out.print("Muoi ");
            number_temp = number_temp + "Mươi ";
            if (s.charAt(1) != '0') {
                if (s.charAt(1) == '5')
                    number_temp = number_temp + "Lăm ";
                //System.out.print("Lam ");
                else if (s.charAt(1) == '1')
                    number_temp = number_temp + "Mốt ";
                else
                    number_temp = number_temp + doc_so(s.charAt(1));
            }
        }
    }
    return number_temp;
}
//
function read_money() {
    var s = document.querySelector('#number').value;
    var number_temp = "";
    var number = "";
    if (s.length == 1) {
        number_temp = number_temp + doc_so(s.charAt(0));
        //System.out.print("nghin dong!");
    } else if (s.length == 2) {
        number_temp = number_temp + doc_hang_chuc(s);
        //System.out.print("nghin dong!");
    } else if (s.length == 3) {
        number_temp = "";
        number = "";
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        //System.out.print("Tram ");
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
            //System.out.print("Linh ");
            //doc_so(s.charAt(s.length() - 1));
        } else {
            number = number + s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
            //doc_hang_chuc(number_temp);
        }
        //System.out.print("nghin dong!");
        // doc_hang_tram(s);
    } else if (s.length == 4) {
        number_temp = "";
        number = "";
        number_temp = number_temp + doc_so(s.charAt(0)) + "Nghìn " + doc_so(s.charAt(1)) + "Trăm ";
        // System.out.print("Nghin ");
        // doc_so(s.charAt(1));
        // System.out.print("Tram ");
        number = s.substring(2);
        if (number.charAt(0) == '0')
            number_temp = number_temp + "Linh ";
        number_temp = number_temp + doc_hang_chuc(number);
        //System.out.print("VND!");
    } else if (s.length == 5) {
        number_temp = number_temp + doc_hang_chuc(s) + "Nghìn ";
        //System.out.print("Trieu ");
        s = s.substring(2);
        // doc_so(s.charAt(0));
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        // System.out.print("Tram ");
        number = s.substring(1);
        if (number.charAt(0) == '0')
            number_temp = number_temp + "Linh ";
        number_temp = number_temp + doc_hang_chuc(number);
        //System.out.print("VND!");
    } else if (s.length == 6) {
        number_temp = "";
        number = "";
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        //System.out.print("Tram ");
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(2));
            //System.out.print("Linh ");
            //doc_so(s.charAt(2));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
        //System.out.print("Trieu ");
        number_temp = number_temp + "Nghìn ";

        number = s.substring(1);
        s = number.substring(2); //s = 505
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        // System.out.print("Tram ");

        if (s.charAt(1) == '0') {
            //System.out.print("Linh ");
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
            // doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
        //System.out.print("VND!");
    } else if (s.length == 7) {
        number_temp = "";
        number = "";
        number_temp = number_temp + doc_so(s.charAt(0)) + "Triệu "; //1.  |000.001

        s = s.substring(1); //s = 000.001   1.004.561
        //read_money(s);
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm "; //một triệu không trăm
        // System.out.print("Tram ");

        if (s.charAt(1) == '0') {
            //System.out.print("Linh ");
            number_temp = number_temp + "Linh " + doc_so(s.charAt(2));
            // doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
        // document.write(s); s = 010
        s = s.substring(3);
        //document.write(s);
        number_temp = number_temp + "Nghìn " + doc_so(s.charAt(0)) + "Trăm ";
        // number = s.substring(1);
        // if (number.charAt(0) == '0' || number.charAt(0) == '1') {
        //     if (s.charAt(0) == '0' && s.charAt(1) != 0) {
        //         number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        //     }
        // }
        if (s.charAt(1) == '0') {
            //System.out.print("Linh ");
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
            // doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
    } else if (s.length == 8) {
        number_temp = "";
        number = "";
        number_temp = number_temp + doc_hang_chuc(s) + "Triệu ";
        s = s.substring(2);
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";


        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
        s = s.substring(3);
        number_temp = number_temp + "Nghìn " + doc_so(s.charAt(0)) + "Trăm ";
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
    } else if (s.length == 9) {
        number_temp = "";
        number = "";
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        s = s.substring(1);
        number_temp = number_temp + doc_hang_chuc(s) + "Triệu ";
        s = s.substring(2);
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
        s = s.substring(3);
        number_temp = number_temp + "Nghìn " + doc_so(s.charAt(0)) + "Trăm ";
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
    } else if (s.length == 10) {
        number_temp = "";
        number = "";
        number_temp = number_temp + doc_so(s.charAt(0)) + "Tỷ "; //1.  |2  |89.585.760
        s = s.substring(1);
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        s = s.substring(1);
        number_temp = number_temp + doc_hang_chuc(s) + "Triệu ";
        s = s.substring(2);
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
        s = s.substring(3);
        number_temp = number_temp + "Nghìn " + doc_so(s.charAt(0)) + "Trăm ";
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
    } else if (s.length == 11) {
        number_temp = "";
        number = "";
        number_temp = number_temp + doc_hang_chuc(s) + "Tỷ ";
        s = s.substring(2);
        //number_temp = number_temp + doc_so(s.charAt(0)) + "Ty "; //1.  |2  |89.585.760
        //s = s.substring(1);
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        s = s.substring(1);
        number_temp = number_temp + doc_hang_chuc(s) + "Triệu ";
        s = s.substring(2);
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
        s = s.substring(3);
        number_temp = number_temp + "Nghìn " + doc_so(s.charAt(0)) + "Trăm ";
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
    } else if (s.length == 12) {
        number_temp = "";
        number = "";
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        //System.out.print("Tram ");
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
            //System.out.print("Linh ");
            //doc_so(s.charAt(s.length() - 1));
        } else {
            number = number + s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
            //doc_hang_chuc(number_temp);
        }
        number_temp = number_temp + "Tỷ "; //891.289.585.760
        s = s.substring(3);
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        s = s.substring(1);
        number_temp = number_temp + doc_hang_chuc(s) + "Triệu ";
        s = s.substring(2);
        number_temp = number_temp + doc_so(s.charAt(0)) + "Trăm ";
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
        s = s.substring(3);
        number_temp = number_temp + "Nghìn " + doc_so(s.charAt(0)) + "Trăm ";
        if (s.charAt(1) == '0') {
            number_temp = number_temp + "Linh " + doc_so(s.charAt(s.length - 1));
        } else {
            number = s.substring(1);
            number_temp = number_temp + doc_hang_chuc(number);
        }
    } else {
        return "Vượt quá giới hạn đọc số!"
    }

    document.querySelector('#doc_so').innerHTML = number_temp;
    return number_temp;
}
// var s = document.querySelector('#number').value;
// var doc_so = read_money(s);
// var s = "8912895857650"; //891.289.585.760
// document.write(s + "<br/>");
// document.write(read_money(s));