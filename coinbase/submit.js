{
                    key: "submit",
                    value: function() {
                        var e = this,
                            t = this.buildOrder();
                        this.ordersStore.addOrUpdateOrder(t);
                        var r = {
                            profile_id: t.profile_id,
                            show_match: "market" === t.type
                        };
                        return t.save(r).then(Object(ci.action)("saving order", function() {
                            if (e.ordersStore.addOrUpdateOrder(t), "rejected" === t.status) {
                                var r = "";
                                if (t.post_only)
                                    if ("post only" === t.reject_reason) {
                                        var o = t.product_id.split("-");
                                        r = "Post Only: Cannot place order at " + +t.price + " " + o[1] + "/" + o[0] + "."
                                    } else "cannot exceed leverage ratio" === t.reject_reason && (r = "Margin: Cannot exceed leverage ratio");
                                else "FOK" === t.time_in_force && (r = "Time in Force: Cannot fill entire order.");
                                throw !r && t.reject_reason && (r = t.reject_reason), new Error(r)
                            }
                            "pending" === t.status && (t.status = "received"), "market" !== t.type || t.stop || (t.status = "done", t.done_reason = "filled", t.executed_value.gt(0) && (t.avg_market_fill_price = t.executed_value.div(t.filled_size))), e.price = "", e.amount = "", e.stop_price = "", wi.a.refreshAvailableBalance()
                        })).catch(Object(ci.action)(function(e) {
                            throw t.status = "rejected", e
                        }))
                    }
                }
