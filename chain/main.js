const master = new Master(340)
const paypal = new Paypal(450)
const qiwi = new Qiwi(500)

master.setNext(paypal)
paypal.setNext(qiwi)

master.pay(500);