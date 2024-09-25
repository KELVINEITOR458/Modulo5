import { Company } from "./company";
import { Customer } from "./customer";
import { InvoiceItem } from "./invoiceItem";

export class Invoice{
    id!:string;
    company!:Company;
    customer!:Customer;
    items!:InvoiceItem[];
}