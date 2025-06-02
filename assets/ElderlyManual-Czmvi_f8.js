import{i as N,j as t,_ as O,s as L,b as C,J as _,K as E,a as X,g as U,r as u,u as q,M as F,d as G,e as Q,T as p,B as y,C as V,G as B,P as $,L as R,t as k,N as T,v as w,D as J,O as K,Q as Y}from"./index-Q1ZeBCd6.js";import{A as Z}from"./Avatar-DVUw46Qq.js";import{B as tt}from"./MenuBook-B0tqR0Zr.js";import{T as rt}from"./TextField-W_DdEQ40.js";import{I as st}from"./InputAdornment-DpZYuLqV.js";import{S as ot}from"./Search-DXu2CvUy.js";import{E as lt}from"./ExpandMore-BH5DPrig.js";import{C as et}from"./Collapse-CaO-C8Cm.js";import{C as nt}from"./Card-C_njHvpj.js";import{C as it}from"./CardContent-CTOaYmy2.js";import"./useSlot-BPLY3NgV.js";import"./useControlled-DCBZYHBC.js";const at=N(t.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),pt=["slots","slotProps"],ct=L(_)(({theme:r})=>C({display:"flex",marginLeft:`calc(${r.spacing(1)} * 0.5)`,marginRight:`calc(${r.spacing(1)} * 0.5)`},r.palette.mode==="light"?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":C({},r.palette.mode==="light"?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":C({boxShadow:r.shadows[0]},r.palette.mode==="light"?{backgroundColor:E(r.palette.grey[200],.12)}:{backgroundColor:E(r.palette.grey[600],.12)})})),gt=L(at)({width:24,height:16});function dt(r){const{slots:o={},slotProps:i={}}=r,g=O(r,pt),n=r;return t.jsx("li",{children:t.jsx(ct,C({focusRipple:!0},g,{ownerState:n,children:t.jsx(gt,C({as:o.CollapsedIcon,ownerState:n},i.collapsedIcon))}))})}function ut(r){return U("MuiBreadcrumbs",r)}const ht=X("MuiBreadcrumbs",["root","ol","li","separator"]),mt=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],xt=r=>{const{classes:o}=r;return Q({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},ut,o)},Ct=L(p,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(r,o)=>[{[`& .${ht.li}`]:o.li},o.root]})({}),ft=L("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(r,o)=>o.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),Pt=L("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(r,o)=>o.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function bt(r,o,i,g){return r.reduce((n,f,h)=>(h<r.length-1?n=n.concat(f,t.jsx(Pt,{"aria-hidden":!0,className:o,ownerState:g,children:i},`separator-${h}`)):n.push(f),n),[])}const At=u.forwardRef(function(o,i){const g=q({props:o,name:"MuiBreadcrumbs"}),{children:n,className:f,component:h="nav",slots:P={},slotProps:I={},expandText:H="Show path",itemsAfterCollapse:b=1,itemsBeforeCollapse:A=1,maxItems:j=8,separator:a="/"}=g,s=O(g,mt),[l,e]=u.useState(!1),m=C({},g,{component:h,expanded:l,expandText:H,itemsAfterCollapse:b,itemsBeforeCollapse:A,maxItems:j,separator:a}),x=xt(m),W=F({elementType:P.CollapsedIcon,externalSlotProps:I.collapsedIcon,ownerState:m}),M=u.useRef(null),D=d=>{const S=()=>{e(!0);const z=M.current.querySelector("a[href],button,[tabindex]");z&&z.focus()};return A+b>=d.length?d:[...d.slice(0,A),t.jsx(dt,{"aria-label":H,slots:{CollapsedIcon:P.CollapsedIcon},slotProps:{collapsedIcon:W},onClick:S},"ellipsis"),...d.slice(d.length-b,d.length)]},v=u.Children.toArray(n).filter(d=>u.isValidElement(d)).map((d,S)=>t.jsx("li",{className:x.li,children:d},`child-${S}`));return t.jsx(Ct,C({ref:i,component:h,color:"text.secondary",className:G(x.root,f),ownerState:m},s,{children:t.jsx(ft,{className:x.ol,ref:M,ownerState:m,children:bt(l||j&&v.length<=j?v:D(v),x.separator,a,m)})}))}),jt=N(t.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),c={title:"Allcare Health Care, LLC 客户信息手册",subtitle:"All People. All Heart. Allcare.",phone:"240 668 4666",effectiveDate:"2024年7月",description:"为客户提供全面的护理服务指导和重要信息",chapters:[{id:"welcome",title:"1. 欢迎来到 Allcare Health Care, LLC",sections:[{id:"mission",title:"我们的使命与承诺",content:`
            <p>欢迎您选择 Allcare Health Care, LLC。我们致力于通过专业和富有同情心的个人护理助理 (PCA) 服务，为您和您的家人提供支持。我们的核心理念是"All People. All Heart. Allcare."，这意味着我们以全心全意的态度对待每一位客户，尊重个体差异，并致力于提供最高质量的个性化护理。我们相信，每个人都应该在自己舒适的家中获得尊重和专业的照护，以维持独立性和生活品质。我们的团队将与您和您的医生紧密合作，确保您的护理计划满足您的特定需求。</p>
          `},{id:"contact",title:"联系 Allcare Health Care, LLC",content:`
            <p>为了确保您能够及时获得所需的支持和服务，请通过以下方式联系我们：</p>

            <p><strong>公司名称：</strong> Allcare Health Care, LLC</p>
            <p><strong>主要电话（咨询、安排服务、非紧急临床问题）：</strong> 240 668 4666</p>
            <p><strong>非办公时间紧急联系方式：</strong> （请用户提供，如与主要电话不同） 对于下班后的紧急事务，请拨打 [用户提供的号码]。对于医疗急症，请务必首先拨打 911。</p>
            <p><strong>办公时间：</strong> （请用户提供）</p>
            <p><strong>办公地址：</strong> （请用户提供，如适用）</p>
            <p><strong>电子邮箱：</strong> （请用户提供，如适用）</p>
          `},{id:"quick-reference",title:"重要联系信息速查表",content:`
            <p>为了方便您快速查找，以下列出了重要的联系方式：</p>
            <p>（此部分内容将根据具体需要填写）</p>
          `}]},{id:"authorization",title:"2. 开始：授权、协议与确认",sections:[{id:"care-authorization",title:"提供护理服务的许可及财务责任的理解",content:`
            <p>本节内容旨在确保客户或其法定代表人充分理解并同意接受 Allcare Health Care, LLC（以下简称"本机构"）的服务条款和相关政策。</p>

            <p>客户或其法定代表人特此授权本机构的员工，根据客户的主治医师的医嘱，提供必要的个人护理助理 (PCA) 服务及其他相关的非技能性辅助服务。</p>

            <p>客户或其法定代表人确认，本机构已通知、告知并向其解释了《客户权利法案》。客户或其法定代表人已收到关于预立指示（包括医疗指示、医疗保健持久授权书）和院外"请勿复苏"(DNR) 指令的信息。客户或其法定代表人理解，所提供的服务、服务的监督以及服务产生的费用，将由客户/家庭负责支付。</p>
          `},{id:"phi-authorization",title:"受保护健康信息 (PHI) 使用与披露授权",content:`
            <p>客户或其法定代表人授权本机构向地方、州或联邦机构的代表、认证机构、保险公司或其他组织或实体的代表发布任何必要的医疗信息，以便为本机构提供的家庭护理服务支付索赔款项。本机构已告知客户或其法定代表人有关临床记录披露的政策和程序。</p>

            <p>详细的《受保护健康信息 (PHI) 使用与披露授权书》将在本手册的后续章节或作为单独文件提供，客户或其法定代表人将被要求签署该授权书，以确认理解并同意相关条款。</p>
          `},{id:"insurance-assignment",title:"保险赔付转让（如适用）",content:`
            <p>若客户的护理服务费用涉及保险赔付，并且本机构接受此类赔付方式，客户或其法定代表人同意，将根据付款方的规定应支付给客户或为其利益支付的任何福利转让给本机构。客户或其法定代表人同意与本机构合作、协助并支持本机构向付款方开具账单以获取这些服务的付款。</p>

            <p>客户或其法定代表人证明，目前没有其他家庭护理机构正在为其提供家庭护理服务，并理解如果歪曲此事实，将导致客户或其法定代表人在财务上对本机构提供的护理服务负责。如果过去曾有其他家庭护理机构提供服务，客户或其法定代表人已在本机构开始提供护理服务之前，要求从那些服务中出院。客户或其法定代表人证明，在申请社会保障法案第XVIII章下的付款时所提供的信息是正确的。客户或其法定代表人请求将客户的福利款项直接支付给本机构。</p>

            <p>本机构将根据具体情况与客户或其法定代表人确认保险赔付的适用性及具体操作流程。</p>
          `},{id:"important-confirmations",title:"重要确认事项",content:`
            <p>客户或其法定代表人确认并理解以下事项：</p>

            <p><strong>护理人员在场时间：</strong> 本机构的护理人员可能不会全天候在客户家中。当本机构员工不在场时，客户本人、其照护者或法定监护人将承担客户的护理责任。</p>

            <p><strong>员工药物测试：</strong> 本机构通常不对其员工进行例行药物测试，但保留酌情使用尿液样本进行测试的权利。</p>

            <p><strong>未涵盖费用通知：</strong> 如果产生任何未被保险或第三方付款方涵盖的费用，本机构将在知晓这些费用之日起不迟于30天内，以书面和口头形式通知客户或其法定代表人。</p>

            <p><strong>紧急情况下的服务转移：</strong> 在发生紧急情况，且本机构无法满足客户需求时，本机构可以将客户转移至能够提供所需护理的另一家机构。</p>

            <p><strong>HMO/PPO组织声明（如适用）：</strong> 客户或其法定代表人证明，目前未接受任何其他家庭护理服务，并且未加入任何可能与本机构服务冲突的健康维护组织 (HMO) / 优选医疗机构组织 (PPO)。此条款的适用性将根据PCA服务的具体支付方式确定。</p>

            <p><strong>禁止私下雇佣员工：</strong> 客户或其法定代表人理解，不得在未首先向本机构支付约定补偿金额（例如，$5,000）的情况下，私下雇佣本机构的员工。此政策旨在保护本机构在员工招聘和培训方面的投入。</p>

            <p><strong>复苏、医疗急症与911服务：</strong> 客户或其法定代表人已被告知本机构关于复苏、医疗急症以及获取911紧急医疗服务 (EMS) 的政策。</p>

            <p><strong>护理监督与投诉：</strong> 客户或其法定代表人知晓，将有一名注册护士 (RN) 监督其护理，并且如果对所提供的服务有任何投诉，应联系负责其护理的注册护士。本机构已提供该护士的联系电话。</p>

            <p><strong>向州卫生部门投诉的权利：</strong> 客户或其法定代表人已被告知其权利，并且可以就本机构向马里兰州卫生与心理健康部（现为马里兰州卫生部）的热线提出投诉。经核实，马里兰州卫生保健质量办公室 (OHCQ) 的当前投诉电话为 410-402-8015 或免费电话 877-402-8218。有关投诉的详细信息，请参阅本手册"分享您的反馈：申诉与疑虑"部分。</p>
          `}]},{id:"rights",title:"3. 您的权利与我们的隐私承诺",sections:[{id:"client-rights",title:"客户权利法案",content:`
            <p>作为 Allcare Health Care, LLC 的客户，您拥有以下权利。我们希望您了解这些权利，并在接受服务的任何时候行使它们。如果您或您的指定代表无法阅读本《客户权利法案》，我们将向您宣读。如果您或您的指定代表不讲英语，我们将提供您所理解语言版本的副本。</p>

            <p><strong>您有权：</strong></p>

            <ul>
              <li><strong>充分知情权：</strong> 在提供预先计划的护理之前，充分了解所有权利和责任，并理解这些权利可以随时行使。</li>
              <li><strong>获得适当和专业的护理权：</strong> 根据医嘱，获得适当和专业的护理，不受歧视。</li>
              <li><strong>选择医疗服务提供者权：</strong> 包括选择主治医师的权利。</li>
              <li><strong>选择家庭护理机构权：</strong> 有权选择家庭护理机构，并在接受护理前向所选机构索取有关其提供的服务、可替代方案、执照和认证要求以及机构所有权和控制权的全部信息。</li>
              <li><strong>预先知晓护理计划和变更权：</strong> 预先了解将提供的护理以及将要进行的任何护理变更，并在变更发生前被告知。</li>
              <li><strong>了解护理人员信息权：</strong> 了解将提供护理的专业人员的学科、建议的访视频率，并知晓所有提供护理的工作人员都经过适当培训且有能力履行其职责。</li>
              <li><strong>知情同意权：</strong> 在开始任何程序或治疗以及进行任何变更之前，获得必要的信息以做出知情同意。</li>
              <li><strong>参与护理计划制定与修改权：</strong> 参与制定和定期修订护理计划，并对护理计划提出修改意见。</li>
              <li><strong>查阅记录与隐私保密权：</strong> 查阅自己的记录，并期望客户记录和受保护健康信息 (PHI) 中的所有信息得到保密和隐私保护。</li>
              <li><strong>拒绝护理或治疗权：</strong> 在充分了解拒绝护理或治疗的后果后，有权拒绝护理或治疗。</li>
            </ul>
          `},{id:"privacy-notice",title:"隐私实践通知 (HIPAA) 与确认",content:`
            <p><strong>本通知描述了您的医疗信息可能如何被使用和披露，以及您如何获取这些信息。请仔细阅读。</strong></p>

            <p>Allcare Health Care, LLC 致力于保护您的受保护健康信息 (PHI) 的隐私。我们在法律上有义务维护您的 PHI 的隐私和安全，向您提供我们关于您的 PHI 的法律义务和隐私实践的通知，并在此通知的条款目前生效时遵循这些条款。</p>

            <h4>我们如何使用和披露您的受保护健康信息</h4>

            <p><strong>治疗：</strong> 我们可能使用您的 PHI 为您提供治疗和服务。我们可能向医生、护士、技术人员或其他参与您护理的人员披露您的 PHI。例如，医生可能与护士分享您的 PHI，以协调您的不同护理需求。</p>

            <p><strong>付款：</strong> 我们可能使用和披露您的 PHI，以便为我们提供给您的治疗和服务获得付款。例如，我们可能需要向您的健康计划提供有关您接受的治疗的信息，以便您的健康计划同意支付治疗费用。</p>

            <p><strong>医疗保健运营：</strong> 我们可能使用和披露您的 PHI 进行医疗保健运营。这些用途和披露对于我们机构的运营以及确保我们所有患者获得优质护理是必要的。例如，我们可能使用 PHI 来审查我们的治疗和服务，并评估我们护理人员在照顾您方面的表现。</p>

            <h4>您对受保护健康信息的权利</h4>

            <p><strong>查阅权：</strong> 您有权查阅和获取我们维护的关于您的 PHI 副本，但有某些有限的例外。要查阅和获取您的 PHI 副本，您必须向我们提交书面请求。</p>

            <p><strong>修正权：</strong> 如果您认为我们关于您的 PHI 不正确或不完整，您可以要求我们修正信息。要请求修正，您的请求必须是书面的，并且必须提供支持所请求修正的理由。</p>

            <p><strong>披露会计权：</strong> 您有权要求"披露会计"，这是我们在过去六年中为治疗、付款或医疗保健运营以外的某些目的所做的 PHI 披露清单。</p>

            <p><strong>请求限制权：</strong> 您有权请求限制或限制我们使用或披露您的 PHI 进行治疗、付款或医疗保健运营。您也有权请求限制我们向参与您护理或支付您护理费用的家庭成员或朋友披露您的 PHI。</p>

            <p><strong>请求保密通信权：</strong> 您有权请求我们通过替代方式或在替代地点与您就医疗事务进行通信。</p>

            <p><strong>投诉权：</strong> 如果您认为您的隐私权利受到侵犯，您可以向我们或卫生与公众服务部部长提出投诉。要向我们提出投诉，请联系我们的隐私官。我们不会因为您提出投诉而对您进行报复。</p>
          `},{id:"non-discrimination",title:"非歧视政策",content:`
            <p>Allcare Health Care, LLC 作为接受联邦财政援助的机构，在接纳、参与或接受其任何项目和活动的任何服务和福利方面，或在其雇佣方面，无论是直接由本机构执行，还是通过与本机构安排执行其项目和活动的承包商或任何其他实体执行，均不因种族、肤色、国籍、残疾、艾滋病或艾滋病相关状况、年龄或性取向而排斥、拒绝给予福利或以其他方式歧视任何人。</p>

            <p>本声明符合1964年《民权法案》第六章、1973年《康复法案》第504节、1975年《年龄歧视法案》以及美国卫生与公众服务部根据这些法案发布的法规（联邦法规法典第45篇第80、84、91部分）的规定。其他联邦法律法规也提供了类似的保护，禁止基于性别和信仰的歧视。</p>

            <p>如果对此政策有任何疑问，或者希望就上述违规行为提出投诉，请联系：</p>

            <p><strong>机构负责人</strong><br>
            Allcare Health Care, LLC<br>
            电话：240 668 4666<br>
            地址：（请用户提供 Allcare Health Care, LLC 的地址）</p>
          `}]},{id:"responsibilities",title:"4. 作为我们客户的责任",sections:[{id:"client-responsibilities",title:"客户责任",content:`
            <p>为了确保我们能够为您提供最优质的服务，并建立一个相互尊重和合作的护理关系，我们希望您了解并履行以下作为客户的责任：</p>

            <p><strong>提供准确和完整的信息：</strong> 尽您所知，提供关于以下方面的准确和完整信息：</p>
            <ul>
              <li>过去和现在的病史。</li>
              <li>病情的意外变化。</li>
              <li>是否理解所选的行动方案。</li>
            </ul>

            <p><strong>遵循治疗建议：</strong> 遵循负责处理您病例的专业人员推荐的治疗方案。</p>

            <p><strong>对拒绝治疗或不遵医嘱的行为负责：</strong> 如果您拒绝治疗或不遵循医生的嘱咐，您需要对自己的行为负责。</p>

            <p><strong>履行财务义务：</strong> 确保尽快履行您的医疗保健财务义务。</p>

            <p><strong>尊重所有提供服务的工作人员的权利。</strong></p>

            <p><strong>提前通知取消：</strong> 如果您必须取消预约或访视，请尽早通知本机构。</p>

            <p><strong>争取生活自理：</strong> 在可能的情况下，利用自身、家庭和其他资源，努力实现生活自理。</p>

            <p><strong>支付第三方付款方未涵盖的护理或服务费用。</strong></p>

            <p><strong>遵守机构规定：</strong> 遵守本机构制定的规章制度以及后续对这些规则的任何更改。</p>

            <p>我们相信，通过共同努力，我们可以为您提供一个安全、有效和令人满意的护理体验。</p>
          `}]},{id:"services",title:"5. 了解您的护理：我们的服务",sections:[{id:"service-overview",title:"Allcare Health Care, LLC 服务概览",content:`
            <p>Allcare Health Care, LLC 专注于提供高质量的个人护理助理 (PCA) 服务，以满足您特定的医疗保健需求。在您的医生指导下，我们合格的医疗保健专业人员团队将根据需要提供持续的病例管理，确保服务适当、称职且一致。</p>

            <p>（请用户确认 Allcare Health Care, LLC 是否提供除 PCA 服务以外的其他服务，如陪伴/看护服务。如果仅提供 PCA 服务，则以下关于技术护士和家庭健康助手/认证护士助理的内容应予删除或修改，以准确反映机构的服务范围。）</p>

            <p><strong>我们的服务可能包括：</strong></p>
            <ul>
              <li><strong>个人护理助理 (PCA)：</strong> 我们的核心服务，旨在协助客户完成日常生活活动，维护个人卫生，并提供必要的支持。</li>
              <li><strong>陪伴/看护服务 (Companion/Sitter)：</strong> （如果 Allcare 提供此服务） 可以从事轻度家务、跑腿、购物、交通和陪伴。</li>
            </ul>

            <p><strong>您的护理计划将根据您的具体需求制定，并可能包括以下专业和/或辅助专业服务以及访视频率：</strong></p>
            <ul>
              <li>个人护理助理 (PCA)：[访视频率，例如：每周X次，每次X小时]</li>
              <li>陪伴/看护服务：[访视频率，例如：每周X次，每次X小时] （如果适用）</li>
            </ul>
          `},{id:"pca-services",title:"您的个人护理助理 (PCA) 服务内容",content:`
            <p>如果您需要个人护理助理 (PCA) 的服务，您的 PCA 将是一名经过认证和培训的专业人员，在您康复期间为您提供协助。PCA 将提供必要的个人护理，以促进治疗或防止您的健康状况恶化。以下是您可以期待的服务内容：</p>

            <p><strong>人员配置：</strong> 本家庭健康机构雇佣男性和女性个人护理助理。</p>

            <p><strong>访视频率：</strong> 每周的访视次数是在注册护士对您的需求进行评估并收到您的医生医嘱后确定的。</p>

            <p><strong>护理计划：</strong> 注册护士将根据您的具体需求制定护理计划，并将一份副本存放在您家中的文件夹中。</p>

            <p><strong>护理监督：</strong> 为确保提供适当的护理，PCA 将每两周接受一次注册护士的监督。如果在任何时候出现有关您的 PCA 的问题，例如所提供的护理或服务，请致电并联系临床服务总监或注册护士。</p>

            <p><strong>人员安排的连续性：</strong> 我们将尽一切努力为您的服务提供持续的人员安排。但是，其他工作安排和本机构的人事需求可能会导致需要更换人员。</p>

            <p><strong>PCA 的主要职责是提供个人护理，包括：</strong></p>
            <ul>
              <li>洗浴（可以是床上擦浴、局部擦浴、盆浴或淋浴，由注册护士决定）</li>
              <li>头发护理（梳头、刷头、洗发、吹干/造型）</li>
              <li>指甲护理：清洁、锉平、抛光。（PCA 不剪指甲）</li>
              <li>使用润肤露和/或爽身粉进行皮肤护理</li>
              <li>导尿管护理（更换、清空和/或清洁尿袋。PCA 不冲洗导尿管）（此项服务可能需要特定培训和授权，请Allcare确认其PCA是否执行）</li>
              <li>造口袋护理（冲洗、清空尿袋）（此项服务可能需要特定培训和授权，请Allcare确认其PCA是否执行）</li>
              <li>协助穿衣、梳妆</li>
              <li>协助行走</li>
              <li>协助转移（进出床、轮椅和床边便桶）</li>
              <li>提醒您服药（PCA 不负责给药）</li>
              <li>测量并记录您的生命体征（体温、脉搏、血压），并向您的护士报告</li>
              <li>按照护士的指示进行关节活动度锻炼</li>
            </ul>

            <p><strong>在时间允许的情况下，PCA 还可以协助完成轻度家务，例如：</strong></p>
            <ul>
              <li>浴室区域：水槽、浴缸、马桶（包括清空床边便桶）、小便器、垃圾，将湿毛巾放在适当位置。</li>
              <li>卧室：轻度除尘、吸尘、扫地/拖地，将个人物品放在触手可及的地方，清空垃圾。</li>
              <li>厨房：必要时为客户准备膳食，为客户清洗餐具，清洁厨房水槽，扫地，清空垃圾。</li>
              <li>洗衣：客户的衣物，包括客户的床上用品和毛巾。</li>
            </ul>

            <p><strong>PCA 不能执行的任务：</strong></p>
            <p>为了您的安全和遵守法规，PCA 不能 执行以下任务：</p>
            <ul>
              <li>给药（包括处方药、非处方药、滴眼液、栓剂等），但可以提醒客户按时服药。</li>
              <li>进行任何需要无菌技术的程序（例如，无菌伤口护理、注射）。</li>
              <li>进行任何侵入性程序（例如，插入导尿管、灌肠）。</li>
              <li>执行任何超出其培训范围和州法规允许范围的任务。</li>
              <li>剪指甲（特别是糖尿病患者或血液循环不良的客户）。</li>
              <li>提供医疗建议或诊断。</li>
            </ul>
          `},{id:"care-supervision",title:"您的护理监督",content:`
            <p>您的个人护理助理 (PCA) 将在一名注册护士 (RN) 的监督下工作。该注册护士负责评估您的护理需求，制定和更新您的个性化护理计划，并定期对 PCA 的服务进行监督，以确保护理质量和您的满意度。</p>

            <p><strong>通常，注册护士会：</strong></p>
            <ul>
              <li>在开始服务前进行初步评估。</li>
              <li>根据您的需求制定详细的护理计划。</li>
              <li>定期（例如，根据机构政策和州法规，可能为每两周一次）进行家庭访视，以监督 PCA 的工作，评估您的病情变化，并根据需要调整护理计划。</li>
              <li>作为您就护理相关问题或疑虑的主要联系人。</li>
            </ul>

            <p>负责监督您护理的注册护士的姓名和联系方式将提供给您。如果您对护理服务有任何疑问或不满，请首先联系负责的注册护士或本机构的临床服务总监。</p>

            <p><strong>Allcare Health Care, LLC 护理监督联系人：</strong></p>
            <ul>
              <li><strong>职位：</strong> 护理主管 (Supervising Nurse) / 临床服务总监 (Director of Clinical Services) （请用户确认具体职位名称）</li>
              <li><strong>姓名：</strong> （请用户提供，或留空由机构填写）</li>
              <li><strong>联系电话：</strong> 240 668 4666 （或其他指定号码）</li>
            </ul>
          `}]},{id:"safety",title:"6. 确保您在家中的安全与健康",sections:[{id:"infection-control",title:"感染预防与控制",content:`
            <p>感染预防是保护您和我们工作人员健康的重要措施。以下是我们遵循的感染控制指南：</p>

            <h4>手部卫生</h4>
            <ul>
              <li><strong>频繁洗手：</strong> 我们的工作人员将在到达、离开以及护理活动前后洗手</li>
              <li><strong>使用洗手液：</strong> 在无法洗手时使用含酒精的洗手液</li>
              <li><strong>正确洗手技术：</strong> 用肥皂和温水洗手至少20秒</li>
            </ul>

            <h4>个人防护设备 (PPE)</h4>
            <ul>
              <li><strong>手套：</strong> 在接触体液或进行个人护理时佩戴一次性手套</li>
              <li><strong>口罩：</strong> 根据需要和当前健康指导佩戴口罩</li>
              <li><strong>防护服：</strong> 在必要时穿戴防护服</li>
            </ul>

            <h4>环境清洁</h4>
            <ul>
              <li><strong>表面消毒：</strong> 定期清洁和消毒经常接触的表面</li>
              <li><strong>废物处理：</strong> 正确处理医疗废物和个人护理用品</li>
              <li><strong>通风：</strong> 保持良好的室内空气流通</li>
            </ul>

            <h4>疾病预防</h4>
            <ul>
              <li><strong>症状监测：</strong> 监测感染症状，如发热、咳嗽等</li>
              <li><strong>疫苗接种：</strong> 鼓励按照医生建议接种疫苗</li>
              <li><strong>隔离措施：</strong> 在出现感染症状时采取适当的隔离措施</li>
            </ul>
          `},{id:"medication-safety",title:"用药安全指南",content:`
            <p>正确的用药管理对您的健康和安全至关重要。以下是用药安全的重要指南：</p>

            <h4>用药管理原则</h4>
            <ul>
              <li><strong>遵循医嘱：</strong> 严格按照医生的处方和指示服药</li>
              <li><strong>不要自行调整：</strong> 不要自行增减药量或停药</li>
              <li><strong>定时服药：</strong> 按照规定的时间和频率服药</li>
              <li><strong>完整疗程：</strong> 即使感觉好转也要完成整个疗程</li>
            </ul>

            <h4>PCA在用药方面的作用</h4>
            <ul>
              <li><strong>提醒服药：</strong> PCA可以提醒您按时服药</li>
              <li><strong>观察反应：</strong> 观察并报告任何药物不良反应</li>
              <li><strong>协助取药：</strong> 帮助您从药房取药</li>
              <li><strong>药物整理：</strong> 帮助整理和分装药物（在允许的情况下）</li>
            </ul>

            <p><strong>重要提醒：</strong> PCA不能：</p>
            <ul>
              <li>给您服药或注射</li>
              <li>决定药物剂量</li>
              <li>更改用药时间</li>
              <li>提供医疗建议</li>
            </ul>

            <h4>用药安全提示</h4>
            <ul>
              <li><strong>药物清单：</strong> 保持最新的药物清单，包括处方药、非处方药和补充剂</li>
              <li><strong>药物相互作用：</strong> 告知医生所有正在服用的药物</li>
              <li><strong>过敏反应：</strong> 立即报告任何过敏反应或不良反应</li>
              <li><strong>储存安全：</strong> 按照说明正确储存药物</li>
              <li><strong>过期药物：</strong> 定期检查并安全处置过期药物</li>
            </ul>
          `},{id:"fall-prevention",title:"预防意外与跌倒",content:`
            <p>跌倒是老年人面临的主要安全风险之一。以下措施可以帮助预防跌倒和其他意外：</p>

            <h4>家庭环境安全</h4>
            <ul>
              <li><strong>清除障碍物：</strong> 保持走道畅通，移除地毯、电线等绊倒隐患</li>
              <li><strong>充足照明：</strong> 确保所有区域都有充足的照明，特别是楼梯和走廊</li>
              <li><strong>防滑措施：</strong> 在浴室和其他湿滑区域使用防滑垫</li>
              <li><strong>扶手安装：</strong> 在楼梯、浴室和其他需要的地方安装扶手</li>
              <li><strong>地面平整：</strong> 修复不平整的地面和松动的地板</li>
            </ul>

            <h4>个人安全措施</h4>
            <ul>
              <li><strong>合适的鞋子：</strong> 穿着合脚、防滑的鞋子，避免拖鞋</li>
              <li><strong>缓慢移动：</strong> 避免突然起身或快速转身</li>
              <li><strong>使用助行器具：</strong> 根据需要使用拐杖、助行器等</li>
              <li><strong>定期眼科检查：</strong> 保持良好的视力</li>
              <li><strong>药物副作用：</strong> 了解可能影响平衡的药物副作用</li>
            </ul>

            <h4>浴室安全</h4>
            <ul>
              <li><strong>防滑垫：</strong> 在浴缸和淋浴间使用防滑垫</li>
              <li><strong>扶手：</strong> 安装浴缸和马桶旁的扶手</li>
              <li><strong>淋浴椅：</strong> 考虑使用淋浴椅或浴缸座椅</li>
              <li><strong>水温控制：</strong> 调节合适的水温，避免烫伤</li>
            </ul>

            <h4>紧急情况准备</h4>
            <ul>
              <li><strong>紧急联系方式：</strong> 在易于找到的地方放置紧急联系电话</li>
              <li><strong>医疗警报系统：</strong> 考虑使用医疗警报设备</li>
              <li><strong>手机充电：</strong> 确保手机始终充电并易于取得</li>
              <li><strong>邻居联系：</strong> 与邻居建立联系以备紧急情况</li>
            </ul>
          `}]}]},yt=c.chapters.flatMap(r=>r.sections.map(o=>({id:o.id,chapterId:r.id,chapterTitle:r.title,title:o.title,content:o.content.replace(/<[^>]*>/g,""),fullPath:`${r.title} > ${o.title}`})));function Et(){const[r,o]=u.useState(""),[i,g]=u.useState(null),[n,f]=u.useState({}),[h,P]=u.useState([]),I=s=>{if(o(s),s.trim()===""){P([]);return}const l=yt.filter(e=>e.title.toLowerCase().includes(s.toLowerCase())||e.content.toLowerCase().includes(s.toLowerCase())||e.chapterTitle.toLowerCase().includes(s.toLowerCase()));P(l)},H=s=>{f(l=>({...l,[s]:!l[s]}))},b=(s,l)=>{const e=c.chapters.find(x=>x.id===s),m=e==null?void 0:e.sections.find(x=>x.id===l);m&&(g({chapter:e,section:m}),o(""),P([]))},A=s=>{b(s.chapterId,s.id)},j=u.useMemo(()=>{if(!i&&c.chapters.length>0){const s=c.chapters[0],l=s.sections[0];return{chapter:s,section:l}}return i},[i]),a=i||j;return t.jsx(y,{sx:{pt:4,pb:8,backgroundColor:"#f8fafc",minHeight:"100vh"},children:t.jsxs(V,{maxWidth:!1,sx:{maxWidth:"1400px",mx:"auto",px:3},children:[t.jsxs(y,{sx:{mb:6,textAlign:"center"},children:[t.jsx(Z,{sx:{width:80,height:80,mx:"auto",mb:3,backgroundColor:"primary.main"},children:t.jsx(tt,{sx:{fontSize:40}})}),t.jsx(p,{variant:"h2",component:"h1",gutterBottom:!0,children:c.title}),t.jsx(p,{variant:"h5",color:"primary.main",sx:{mb:2,fontWeight:600},children:c.subtitle}),t.jsxs(p,{variant:"h6",color:"text.secondary",sx:{mb:2},children:["电话：",c.phone]}),t.jsxs(p,{variant:"body1",color:"text.secondary",sx:{mb:2},children:["生效日期：",c.effectiveDate]}),t.jsx(p,{variant:"h6",color:"text.secondary",sx:{maxWidth:600,mx:"auto"},children:c.description})]}),t.jsxs(B,{container:!0,spacing:4,children:[t.jsx(B,{item:!0,xs:12,lg:4,children:t.jsxs($,{sx:{p:3,position:"sticky",top:100,maxHeight:"calc(100vh - 120px)",overflow:"auto"},children:[t.jsx(rt,{fullWidth:!0,placeholder:"搜索手册内容...",value:r,onChange:s=>I(s.target.value),InputProps:{startAdornment:t.jsx(st,{position:"start",children:t.jsx(ot,{})})},sx:{mb:3}}),h.length>0&&t.jsxs(y,{sx:{mb:3},children:[t.jsxs(p,{variant:"subtitle2",gutterBottom:!0,children:["搜索结果 (",h.length,")"]}),t.jsx(R,{dense:!0,children:h.map(s=>t.jsx(k,{disablePadding:!0,children:t.jsx(T,{onClick:()=>A(s),sx:{borderRadius:2},children:t.jsx(w,{primary:s.title,secondary:s.fullPath,primaryTypographyProps:{variant:"body2"},secondaryTypographyProps:{variant:"caption"}})})},`${s.chapterId}-${s.id}`))}),t.jsx(J,{sx:{my:2}})]}),t.jsx(p,{variant:"h6",gutterBottom:!0,children:"目录"}),t.jsx(R,{children:c.chapters.map(s=>t.jsxs(y,{children:[t.jsx(k,{disablePadding:!0,children:t.jsxs(T,{onClick:()=>H(s.id),sx:{borderRadius:2},children:[t.jsx(w,{primary:s.title}),n[s.id]?t.jsx(jt,{}):t.jsx(lt,{})]})}),t.jsx(et,{in:n[s.id],timeout:"auto",unmountOnExit:!0,children:t.jsx(R,{component:"div",disablePadding:!0,children:s.sections.map(l=>{var e;return t.jsx(k,{disablePadding:!0,children:t.jsx(T,{sx:{pl:4,borderRadius:2,backgroundColor:((e=a==null?void 0:a.section)==null?void 0:e.id)===l.id?"rgba(135, 206, 235, 0.15)":"transparent","&:hover":{backgroundColor:"rgba(135, 206, 235, 0.08)"}},onClick:()=>b(s.id,l.id),children:t.jsx(w,{primary:l.title,primaryTypographyProps:{variant:"body2"}})})},l.id)})})})]},s.id))})]})}),t.jsx(B,{item:!0,xs:12,lg:8,children:t.jsx($,{sx:{p:4},children:a&&t.jsxs(t.Fragment,{children:[t.jsxs(At,{sx:{mb:4},children:[t.jsxs(K,{color:"inherit",href:"#",onClick:()=>g(null),children:[t.jsx(Y,{sx:{mr:.5,fontSize:16}}),c.title]}),t.jsx(p,{color:"text.primary",children:a.chapter.title}),t.jsx(p,{color:"text.primary",children:a.section.title})]}),t.jsx(p,{variant:"h3",gutterBottom:!0,sx:{color:"text.primary"},children:a.section.title}),t.jsx(nt,{variant:"outlined",sx:{mt:3},children:t.jsx(it,{sx:{p:4},children:t.jsx(y,{dangerouslySetInnerHTML:{__html:a.section.content},sx:{"& h3":{color:"primary.main",marginTop:3,marginBottom:2,fontSize:"1.5rem",fontWeight:600},"& h4":{color:"text.primary",marginTop:2,marginBottom:1.5,fontSize:"1.25rem",fontWeight:600},"& ul":{paddingLeft:3,marginBottom:2},"& li":{marginBottom:1,lineHeight:1.7},"& p":{marginBottom:2,lineHeight:1.7,fontSize:"1rem"}}})})})]})})})]})]})})}export{Et as default};
