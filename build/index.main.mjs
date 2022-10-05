// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v273 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v274 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v274, v273],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v274, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v278, v279], secs: v281, time: v280, didSend: v39, from: v277 } = txn1;
      
      sim_r.txns.push({
        amt: v278,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v290 = stdlib.safeAdd(v280, v279);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v278, v279], secs: v281, time: v280, didSend: v39, from: v277 } = txn1;
  ;
  const v290 = stdlib.safeAdd(v280, v279);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v290],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v277, v278, v279, v290],
      evt_cnt: 0,
      funcNum: 2,
      lct: v280,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v443, time: v442, didSend: v235, from: v441 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v277,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v443, time: v442, didSend: v235, from: v441 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:47:35:application',
      fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:63:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v296, time: v295, didSend: v48, from: v294 } = txn2;
    const v298 = stdlib.add(v278, v278);
    ;
    let v299 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v300 = v295;
    let v307 = v298;
    
    let txn3 = txn2;
    while (await (async () => {
      const v315 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v315;})()) {
      const v322 = stdlib.safeAdd(v300, v279);
      const v326 = stdlib.protect(ctc0, await interact.getFortune(), {
        at: './index.rsh:72:54:application',
        fs: ['at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:23:function exp)'],
        msg: 'getFortune',
        who: 'Alice'
        });
      const v327 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:73:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v328 = stdlib.digest([ctc0, ctc0], [v327, v326]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v277, v278, v279, v294, v307, v322, v328],
        evt_cnt: 1,
        funcNum: 4,
        lct: v300,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v331], secs: v333, time: v332, didSend: v74, from: v330 } = txn4;
          
          ;
          const v341 = stdlib.safeAdd(v332, v279);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v322],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v277, v278, v279, v294, v307, v322],
          evt_cnt: 0,
          funcNum: 5,
          lct: v300,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v409, time: v408, didSend: v187, from: v407 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v294,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v409, time: v408, didSend: v187, from: v407 } = txn5;
        ;
        const v410 = stdlib.addressEq(v277, v407);
        const v411 = stdlib.addressEq(v294, v407);
        const v412 = v410 ? true : v411;
        stdlib.assert(v412, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:77:81:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:47:35:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:77:81:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v331], secs: v333, time: v332, didSend: v74, from: v330 } = txn4;
        ;
        const v334 = stdlib.addressEq(v277, v330);
        stdlib.assert(v334, {
          at: './index.rsh:77:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v341 = stdlib.safeAdd(v332, v279);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v341],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v277, v278, v279, v294, v307, v331, v341],
            evt_cnt: 0,
            funcNum: 7,
            lct: v332,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v391, time: v390, didSend: v153, from: v389 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v277,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v391, time: v390, didSend: v153, from: v389 } = txn6;
          ;
          const v392 = stdlib.addressEq(v277, v389);
          const v393 = stdlib.addressEq(v294, v389);
          const v394 = v392 ? true : v393;
          stdlib.assert(v394, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:86:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:47:35:application',
            fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:86:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v347], secs: v349, time: v348, didSend: v84, from: v346 } = txn5;
          ;
          const v350 = stdlib.addressEq(v294, v346);
          stdlib.assert(v350, {
            at: './index.rsh:86:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v357 = stdlib.safeAdd(v348, v279);
          const txn6 = await (ctc.sendrecv({
            args: [v277, v278, v279, v294, v307, v331, v347, v357, v326, v327],
            evt_cnt: 2,
            funcNum: 8,
            lct: v348,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:94:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v362, v363], secs: v365, time: v364, didSend: v94, from: v361 } = txn6;
              
              ;
              let v369;
              const v370 = stdlib.eq(v362, v347);
              if (v370) {
                v369 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                v369 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              const cv299 = v369;
              const cv300 = v364;
              const cv307 = v307;
              
              await (async () => {
                const v299 = cv299;
                const v300 = cv300;
                const v307 = cv307;
                
                if (await (async () => {
                  const v315 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v315;})()) {
                  const v322 = stdlib.safeAdd(v300, v279);
                  sim_r.isHalt = false;
                  }
                else {
                  const v430 = stdlib.safeMul(v278, stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'));
                  sim_r.txns.push({
                    kind: 'from',
                    to: v294,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v357],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v277, v278, v279, v294, v307, v331, v347, v357],
              evt_cnt: 0,
              funcNum: 9,
              lct: v348,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v373, time: v372, didSend: v119, from: v371 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v294,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v373, time: v372, didSend: v119, from: v371 } = txn7;
            ;
            const v374 = stdlib.addressEq(v277, v371);
            const v375 = stdlib.addressEq(v294, v371);
            const v376 = v374 ? true : v375;
            stdlib.assert(v376, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:94:93:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:47:35:application',
              fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:94:93:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v362, v363], secs: v365, time: v364, didSend: v94, from: v361 } = txn6;
            ;
            const v366 = stdlib.addressEq(v277, v361);
            stdlib.assert(v366, {
              at: './index.rsh:94:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v367 = stdlib.digest([ctc0, ctc0], [v363, v362]);
            const v368 = stdlib.digestEq(v331, v367);
            stdlib.assert(v368, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:95:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            let v369;
            const v370 = stdlib.eq(v362, v347);
            if (v370) {
              v369 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              v369 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            const cv299 = v369;
            const cv300 = v364;
            const cv307 = v307;
            
            v299 = cv299;
            v300 = cv300;
            v307 = cv307;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v430 = stdlib.safeMul(v278, stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'));
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v278), {
      at: './index.rsh:107:28:application',
      fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v278, v279], secs: v281, time: v280, didSend: v39, from: v277 } = txn1;
  ;
  const v290 = stdlib.safeAdd(v280, v279);
  stdlib.protect(ctc1, await interact.acceptChallenge(v278), {
    at: './index.rsh:60:33:application',
    fs: ['at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'acceptChallenge',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v277, v278, v279, v290],
    evt_cnt: 0,
    funcNum: 1,
    lct: v280,
    onlyIf: true,
    out_tys: [],
    pay: [v278, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v296, time: v295, didSend: v48, from: v294 } = txn2;
      
      const v298 = stdlib.add(v278, v278);
      sim_r.txns.push({
        amt: v278,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v299 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v300 = v295;
      const v307 = v298;
      
      if (await (async () => {
        const v315 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v315;})()) {
        const v322 = stdlib.safeAdd(v300, v279);
        sim_r.isHalt = false;
        }
      else {
        const v430 = stdlib.safeMul(v278, stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'));
        sim_r.txns.push({
          kind: 'from',
          to: v294,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v290],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v277, v278, v279, v290],
      evt_cnt: 0,
      funcNum: 2,
      lct: v280,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v443, time: v442, didSend: v235, from: v441 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v277,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v443, time: v442, didSend: v235, from: v441 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:47:35:application',
      fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:63:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v296, time: v295, didSend: v48, from: v294 } = txn2;
    const v298 = stdlib.add(v278, v278);
    ;
    let v299 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v300 = v295;
    let v307 = v298;
    
    let txn3 = txn2;
    while (await (async () => {
      const v315 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v315;})()) {
      const v322 = stdlib.safeAdd(v300, v279);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v322],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v277, v278, v279, v294, v307, v322],
          evt_cnt: 0,
          funcNum: 5,
          lct: v300,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v409, time: v408, didSend: v187, from: v407 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v294,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v409, time: v408, didSend: v187, from: v407 } = txn5;
        ;
        const v410 = stdlib.addressEq(v277, v407);
        const v411 = stdlib.addressEq(v294, v407);
        const v412 = v410 ? true : v411;
        stdlib.assert(v412, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:77:81:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:47:35:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:77:81:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v331], secs: v333, time: v332, didSend: v74, from: v330 } = txn4;
        ;
        const v334 = stdlib.addressEq(v277, v330);
        stdlib.assert(v334, {
          at: './index.rsh:77:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v341 = stdlib.safeAdd(v332, v279);
        const v345 = stdlib.protect(ctc0, await interact.getFortune(), {
          at: './index.rsh:83:60:application',
          fs: ['at ./index.rsh:82:17:application call to [unknown function] (defined at: ./index.rsh:82:21:function exp)'],
          msg: 'getFortune',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v277, v278, v279, v294, v307, v331, v341, v345],
          evt_cnt: 1,
          funcNum: 6,
          lct: v332,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:86:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v347], secs: v349, time: v348, didSend: v84, from: v346 } = txn5;
            
            ;
            const v357 = stdlib.safeAdd(v348, v279);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v341],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v277, v278, v279, v294, v307, v331, v341],
            evt_cnt: 0,
            funcNum: 7,
            lct: v332,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v391, time: v390, didSend: v153, from: v389 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v277,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v391, time: v390, didSend: v153, from: v389 } = txn6;
          ;
          const v392 = stdlib.addressEq(v277, v389);
          const v393 = stdlib.addressEq(v294, v389);
          const v394 = v392 ? true : v393;
          stdlib.assert(v394, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:86:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:47:35:application',
            fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:86:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v347], secs: v349, time: v348, didSend: v84, from: v346 } = txn5;
          ;
          const v350 = stdlib.addressEq(v294, v346);
          stdlib.assert(v350, {
            at: './index.rsh:86:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v357 = stdlib.safeAdd(v348, v279);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v357],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v277, v278, v279, v294, v307, v331, v347, v357],
              evt_cnt: 0,
              funcNum: 9,
              lct: v348,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v373, time: v372, didSend: v119, from: v371 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v294,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v373, time: v372, didSend: v119, from: v371 } = txn7;
            ;
            const v374 = stdlib.addressEq(v277, v371);
            const v375 = stdlib.addressEq(v294, v371);
            const v376 = v374 ? true : v375;
            stdlib.assert(v376, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:94:93:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:47:35:application',
              fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:94:93:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v362, v363], secs: v365, time: v364, didSend: v94, from: v361 } = txn6;
            ;
            const v366 = stdlib.addressEq(v277, v361);
            stdlib.assert(v366, {
              at: './index.rsh:94:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v367 = stdlib.digest([ctc0, ctc0], [v363, v362]);
            const v368 = stdlib.digestEq(v331, v367);
            stdlib.assert(v368, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:95:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            let v369;
            const v370 = stdlib.eq(v362, v347);
            if (v370) {
              v369 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              v369 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            const cv299 = v369;
            const cv300 = v364;
            const cv307 = v307;
            
            v299 = cv299;
            v300 = cv300;
            v307 = cv307;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v430 = stdlib.safeMul(v278, stdlib.checkedBigNumberify('./index.rsh:103:22:decimal', stdlib.UInt_max, '2'));
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v278), {
      at: './index.rsh:107:28:application',
      fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQBQkgCAcoeAKAAVgwJgMBAAEBACI1ADEYQQSPKmRJIls1ASEGWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0klDEACNEkhBwxAAUBJIQYMQADmSSEEDEAAViEEEkQhBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgOnSCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/0k1BUkiWzX+IQZbNf2ABDUaKtA0/hZQNP0WULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT9FjT+FlABEkQ0/jQDIQlbEkEABiI1/EIAAyM1/DT/NAMhBVs0AyEIWzQDVzAgNPwyBjQDJFtCAsVIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhCVsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0ICy0mBBgxAAJdIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQVbNf4hCFs1/VcwIDX8JFs1+1dYIDX6STUFFzX5gARw7e96NPkWULAyBjQDIQlbDEQ0/DEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfwlnSCEENQEyBjUCQgJISCU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB3kkhCgxAANBJgQQMQACISCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hCFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhDFsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghBzUBMgY1AkIBYyEKEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgEHSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhDVsMRDT/iAE+NANXACA0/zQDIQhbMQAjMgY0/0kIQgBgSIGgjQaIAR4iNAESRDQESSISTDQCEhFESTUFSSJbNf8hBls1/oAErNEfwzT/FlA0/hZQsDT/iADtMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB0Nf81/jX9Nfw1+zX6Nfk0/SMSQQAuNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIJTUBMgY1AkIAMbEisgE0+iEKC7III7IQNPyyB7NCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v278",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v279",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v278",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v279",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v362",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v363",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
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
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
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
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v362",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v363",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c4038038062001c408339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6118c3806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611480565b610197565b6100a16100e8366004611480565b610326565b3480156100f957600080fd5b506001546100b4565b6100a16101103660046114a3565b6104a4565b6100a1610123366004611480565b6106e5565b6100a1610136366004611480565b610880565b6100a1610149366004611480565b610b20565b34801561015a57600080fd5b50610163610d63565b6040516100be9291906114b5565b6100a161017f366004611480565b610e00565b6100a1610192366004611480565b610f97565b6101a760016000541460096110ed565b6101c1813515806101ba57506001548235145b600a6110ed565b6000808055600280546101d390611512565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611512565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611563565b905061027781606001514310600b6110ed565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a89291906115dc565b60405180910390a16102c18160200151341460086110ed565b6102c9611339565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261032181611113565b505050565b610336600160005414600d6110ed565b6103508135158061034957506001548235145b600e6110ed565b60008080556002805461036290611512565b80601f016020809104026020016040519081016040528092919081815260200182805461038e90611512565b80156103db5780601f106103b0576101008083540402835291602001916103db565b820191906000526020600020905b8154815290600101906020018083116103be57829003601f168201915b50505050508060200190518101906103f39190611563565b90506104078160600151431015600f6110ed565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516104389291906115dc565b60405180910390a161044c3415600c6110ed565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610489573d6000803e3d6000fd5b50600080805560018190556104a090600290611392565b5050565b6104b460096000541460276110ed565b6104ce813515806104c757506001548235145b60286110ed565b6000808055600280546104e090611512565b80601f016020809104026020016040519081016040528092919081815260200182805461050c90611512565b80156105595780601f1061052e57610100808354040283529160200191610559565b820191906000526020600020905b81548152906001019060200180831161053c57829003601f168201915b50505050508060200190518101906105719190611619565b90506105896040518060200160405280600081525090565b61059a8260e00151431060296110ed565b604080513381528435602080830191909152850135818301529084013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a16105f5341560246110ed565b815161060d906001600160a01b0316331460256110ed565b6040805161065a916106349190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266110ed565b60c0820151602084013514156106735760008152610678565b600181525b610680611339565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252835181840180519190915280514392019190915260808501519051909101526106df81611113565b50505050565b6106f560056000541460176110ed565b61070f8135158061070857506001548235145b60186110ed565b60008080556002805461072190611512565b80601f016020809104026020016040519081016040528092919081815260200182805461074d90611512565b801561079a5780601f1061076f5761010080835404028352916020019161079a565b820191906000526020600020905b81548152906001019060200180831161077d57829003601f168201915b50505050508060200190518101906107b291906116c5565b90506107c68160a0015143101560196110ed565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107f79291906115dc565b60405180910390a161080b341560156110ed565b805161083f906001600160a01b031633146108355760608201516001600160a01b03163314610838565b60015b60166110ed565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610489573d6000803e3d6000fd5b610890600760005414601c6110ed565b6108aa813515806108a357506001548235145b601d6110ed565b6000808055600280546108bc90611512565b80601f01602080910402602001604051908101604052809291908181526020018280546108e890611512565b80156109355780601f1061090a57610100808354040283529160200191610935565b820191906000526020600020905b81548152906001019060200180831161091857829003601f168201915b505050505080602001905181019061094d9190611759565b90506109656040518060200160405280600081525090565b6109768260c001514310601e6110ed565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516109a79291906117f7565b60405180910390a16109bb3415601a6110ed565b60608201516109d6906001600160a01b03163314601b6110ed565b6109e4438360400151611287565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e08401526009600055436001559051610af59183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610b199291906113cf565b5050505050565b610b3060056000541460126110ed565b610b4a81351580610b4357506001548235145b60136110ed565b600080805560028054610b5c90611512565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8890611512565b8015610bd55780601f10610baa57610100808354040283529160200191610bd5565b820191906000526020600020905b815481529060010190602001808311610bb857829003601f168201915b5050505050806020019051810190610bed91906116c5565b9050610c056040518060200160405280600081525090565b610c168260a00151431060146110ed565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610c479291906117f7565b60405180910390a1610c5b341560106110ed565b8151610c73906001600160a01b0316331460116110ed565b610c81438360400151611287565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610af5565b600060606000546002808054610d7890611512565b80601f0160208091040260200160405190810160405280929190818152602001828054610da490611512565b8015610df15780601f10610dc657610100808354040283529160200191610df1565b820191906000526020600020905b815481529060010190602001808311610dd457829003601f168201915b50505050509050915091509091565b610e1060076000541460216110ed565b610e2a81351580610e2357506001548235145b60226110ed565b600080805560028054610e3c90611512565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6890611512565b8015610eb55780601f10610e8a57610100808354040283529160200191610eb5565b820191906000526020600020905b815481529060010190602001808311610e9857829003601f168201915b5050505050806020019051810190610ecd9190611759565b9050610ee18160c0015143101560236110ed565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f129291906115dc565b60405180910390a1610f263415601f6110ed565b8051610f5a906001600160a01b03163314610f505760608201516001600160a01b03163314610f53565b60015b60206110ed565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610489573d6000803e3d6000fd5b610fa7600960005414602c6110ed565b610fc181351580610fba57506001548235145b602d6110ed565b600080805560028054610fd390611512565b80601f0160208091040260200160405190810160405280929190818152602001828054610fff90611512565b801561104c5780601f106110215761010080835404028352916020019161104c565b820191906000526020600020905b81548152906001019060200180831161102f57829003601f168201915b50505050508060200190518101906110649190611619565b90506110788160e00151431015602e6110ed565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516110a99291906115dc565b60405180910390a16110bd3415602a6110ed565b805161083f906001600160a01b031633146110e75760608201516001600160a01b031633146110ea565b60015b602b5b816104a05760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152602082015151600114156112375761114a826020015160200151836000015160400151611287565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906106df9291906113cf565b8160000151606001516001600160a01b03166108fc61125f84600001516020015160026112da565b6040518115909202916000818181858888f19350505050158015610489573d6000803e3d6000fd5b6000826112948382611834565b91508110156112d45760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161110a565b92915050565b60008115806112fe575082826112f0818361184c565b92506112fc908361186b565b145b6112d45760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161110a565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161138d60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461139e90611512565b6000825580601f106113ae575050565b601f0160209004906000526020600020908101906113cc9190611453565b50565b8280546113db90611512565b90600052602060002090601f0160209004810192826113fd5760008555611443565b82601f1061141657805160ff1916838001178555611443565b82800160010185558215611443579182015b82811115611443578251825591602001919060010190611428565b5061144f929150611453565b5090565b5b8082111561144f5760008155600101611454565b60006040828403121561147a57600080fd5b50919050565b60006040828403121561149257600080fd5b61149c8383611468565b9392505050565b60006060828403121561147a57600080fd5b82815260006020604081840152835180604085015260005b818110156114e9578581018301518582016060015282016114cd565b818111156114fb576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061152657607f821691505b6020821081141561147a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461155e57600080fd5b919050565b60006080828403121561157557600080fd5b6040516080810181811067ffffffffffffffff821117156115a657634e487b7160e01b600052604160045260246000fd5b6040526115b283611547565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461160a57600080fd5b80604085015250509392505050565b600061010080838503121561162d57600080fd5b6040519081019067ffffffffffffffff8211818310171561165e57634e487b7160e01b600052604160045260246000fd5b8160405261166b84611547565b8152602084015160208201526040840151604082015261168d60608501611547565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060c082840312156116d757600080fd5b60405160c0810181811067ffffffffffffffff8211171561170857634e487b7160e01b600052604160045260246000fd5b60405261171483611547565b8152602083015160208201526040830151604082015261173660608401611547565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561176b57600080fd5b60405160e0810181811067ffffffffffffffff8211171561179c57634e487b7160e01b600052604160045260246000fd5b6040526117a883611547565b815260208301516020820152604083015160408201526117ca60608401611547565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b03831681526060810161149c602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156118475761184761181e565b500190565b60008160001904831182151516156118665761186661181e565b500290565b60008261188857634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212206a6b3c98ef4f17295c64fb3cb0719c1bed7becd5a622129188a2be5038ceaf7c64736f6c634300080c0033`,
  BytecodeLen: 7232,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:63:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:104:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:69:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:77:81:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:78:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:87:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:94:93:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
