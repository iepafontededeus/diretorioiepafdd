

// ---------- script properties ----------

var include_num = 1;
var bold = 0;

// ---------- sites ----------


var s = new Array();

s[0] = "JSE^form.html^Enter JSE in the example above ...^open source, free, client side";
s[1] = "JSE DOCUMENTATION^doc.txt^JSE is a client-side local site search engine. Written entirely in JavaScript 1.3 it works with browsers from Netscape 4.7 to Microsoft Internet Explorer 6.0 ...^ faq, docs, instructions";
s[2] = "Testemunho Irmã Dani cura dor há anos, depressão emprego e namoro (Rincão 02/08/2023)^https://diretorio.iepafontededeus.com.br/02-08-2023/^Testemunho Irmã Dani, ela estava afastada da igreja e entrando em depressão, Deus falou com ela no primeiro dia atráves do pastor de uma dor que ela tinha há anos, e ela estava desempregada mesmo sendo bacharel em direito, pastor orou e em 1 semana foi indicada para o gestor e passou, e ela conseguiu um namorado.^testemunho, cura, emprego, depressão, namoro, rincao";
s[3] = "Revelação cura das trompas da irmã (Rincão 02/08/2023)^https://diretorio.iepafontededeus.com.br/02-08-2023/#revelacaotrompas^Pastor orou na fila e revelou que havia algo inpedindo as trompas da irmã, mas que Deus iria dar vitória e ela vai ter um bebê que é a cara do marido dela.^revelação, trompas, cura, trombas, trompa, tromba, rincao";
s[4] = "Oração para o Marquinho (Canta Galo 03/08/2023)^https://diretorio.iepafontededeus.com.br/03-08-2023/^Pastor levanta a igreja para orar pelo Marquinho do Canta Galo, ele pede para Deus fazer a vontade Dele.^oração, canta galo";
s[5] = "Revelação para visitante de chave, e visitando os dela (Canta Galo 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/^Pastor passa revelação para visitante, que Deus iria dar uma chave na mão dela, e que Deus também vai de encontro com os dela.^revelação, chave, canta galo";
s[6] = "Testemunho irmã desempregada a 2 (dois) anos, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#desempregada2anos^Irmã estava desempregada a 2 anos, ela pediu oração ao pastor e ele revelou o salmos 40, em apenas 3 meses que ela vem para a igreja Deus a honrou, dando emprego de carteira registrada para ela e para seu filho.^testemunho, emprego, campanha, perus";
s[7] = "Testemunho marido voltou e bateu na porta, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#baternaporta^Testemunho da irmã que o pastor revelou que o ex-marido dela ia bater na porta e que ela iria dar testemunho na próxima sexta feira (dia 04/08/2023), ela estava fazendo a unha e não esperava ele, e o mesmo não deixou ela fazer a unha, e ele disse que amava ela.^testemunho, campanha, amor, perus";
s[8] = "Testemunho Natália casamento restituido, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#nataliacasamentorestituido^Testemunho Irmã Natália que teve seu casamento restituido após a campanha da vida sentimental de 2023.^testemunho, campanha, amor, perus";
s[9] = "Testemunho e revelação de emprego aonde não existia, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#vagaondenaoexistia^Testemunho (e revelação) do irmão que o pastor disse que iria conseguir uma vaga aonde não existia.^testemunho, revelação, emprego, perus, campanha";
s[10] = "Revelação para o obreiro Clécio de honra na vida empresarial, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#revelacaoclessioempresario^Pastor revelou para Cooperador Clécio que Deus estará honrando ele e que ele irá ser bem sucedido na vida empresarial.^revelação, dinheiro, perus";
s[11] = "Oração final 2023, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#oracaofinalrestadois2023^Pastor fazendo a oração final para a campanha da vida sentimental de 2023.^oração, campanha, perus";
s[12] = "Testemunho de emprego na consagração (Canta Galo 05/08/2023)^https://diretorio.iepafontededeus.com.br/05-08-2023/^Irmã dá o testemunho de emprego na consagração.^testemunho, emprego, canta galo";
s[13] = "Google^https://google.com^O mecanismo de busca mais usado do mundo^google, pesquisa, internet, site";
s[14] = "IEP A Fonte de Deus Youtube^https://youtube.com/@iepafontededeus^Canal da igreja no youtube^youtube, igreja, canal, internet, site";
s[15] = "IEP A Fonte de Deus Instagram^https://instagram.com/iepafontededeus^Perfil da igreja no instagram^instagram, igreja, perfil, internet, site";
s[16] = "IEP A Fonte de Deus Facebook^https://facebook.com/afontededeusoficial^Perfil da igreja no facebook^facebook, igreja, perfil, internet, site";
s[17] = "IEP A Fonte de Deus Tiktok^https://tiktok.com/@iepafontededeus^Perfil da igreja no Tiktok^tiktok, igreja, tik tok, perfil, internet, site";
s[18] = "Pastor Jesus Instagram^https://instagram.com/pastor.jesusiep^Perfil do Pastor Jesus no instagram^instagram, perfil, internet, pastor, site";
s[19] = "Diretório IEP A Fonte de Deus^https://diretorio.iepafontededeus.com.br/^Diretório de videos dos cultos, documentos e informações da IEP A Fonte de Deus^diretório, diretorio, igreja, site";
s[20] = "Cultos Quarta-Feira dia 02/08/2023 (Rincão)^https://diretorio.iepafontededeus.com.br/02-08-2023/^Videos dos cultos do dia 02 de agosto de 2023 (Quarta-Feira) (Rincão)^cultos, culto, quarta, quarta-feira, quarta feira, rincão, rincao, agosto, 2023";
s[21] = "Cultos Quinta-Feira dia 03/08/2023 (Canta Galo, Recanto)^https://diretorio.iepafontededeus.com.br/03-08-2023/^Videos dos cultos do dia 03 de agosto de 2023 (Quinta-Feira) (Canta Galo, Recanto)^cultos, culto, quinta, quinta-feira, quinta feira, canta galo, recanto, agosto, 2023";
s[22] = "Cultos Sexta-Feira dia 04/08/2023 (Canta Galo, Perus)^https://diretorio.iepafontededeus.com.br/04-08-2023/^Videos dos cultos do dia 04 de agosto de 2023 (Sexta-Feira) (Canta Galo, Perus) (7 Elo campanha Restauração a Dois)^cultos, culto, sexta, sexta-feira, sexta feira, canta galo, perus, campanha, agosto, 2023";
s[23] = "Cultos Sábado dia 05/08/2023 (Canta Galo, Rincão)^https://diretorio.iepafontededeus.com.br/05-08-2023/^Videos dos cultos do dia 05 de agosto de 2023 (Sábado) (Canta Galo, Rincão)^cultos, culto, sabado, canta galo, rincão, rincao, agosto, 2023";
s[24] = "Cultos Domingo dia 06/08/2023 (Canta Galo, Recanto, Rincão, Perus)^https://diretorio.iepafontededeus.com.br/06-08-2023/^Videos dos cultos do dia 06 de agosto de 2023 (Domingo) (Canta Galo, Recanto, Rincão, Perus)^cultos, culto, domingo, canta galo, rincão, rincao, recanto, perus, agosto, 2023";
s[25] = "Cultos Segunda-Feira dia 07/08/2023 (Recanto)^https://diretorio.iepafontededeus.com.br/07-08-2023/^Videos dos cultos do dia 07 de agosto de 2023 (Segunda-Feira) (Recanto)^cultos, culto, segunda, segunda-feira, segunda feira, recanto, agosto, 2023";
s[26] = "Cultos Terça-Feira dia 08/08/2023 (Canta Galo, Perus)^https://diretorio.iepafontededeus.com.br/08-08-2023/^Videos dos cultos do dia 08 de agosto de 2023 (Terça-Feira) (Canta Galo, Perus)^cultos, culto, terca, terça, terça-feira, terca-feira, terça feira, terca feira, canta galo, perus, agosto, 2023";
s[27] = "Testemunho de livramento e emprego, Pastor Francisco (Perus 06/08/2023)^https://diretorio.iepafontededeus.com.br/06-08-2023/#livramentoprfrancisco^testemunho, livramento, emprego, perus";
s[28] = "Revelação de destrancar a faculdade (Perus 06/08/2023)^https://diretorio.iepafontededeus.com.br/06-08-2023/#destrancarfacul^Pastor revela que Deus vai destrancar a faculdade de uma pessoa.^revelação, revelacao, revelaçao, faculdade, perus";
s[29] = "Revelação proposta de Deus (Perus 06/08/2023)^https://diretorio.iepafontededeus.com.br/06-08-2023/#propostadeus^Pastor revela que um homem irá receber uma proposta e que ele deveria aceitar, porque é de Deus.^revelação, revelacao, revelaçao, proposta, perus";
s[30] = "Revelação de gravidez (Perus 06/08/2023)^https://diretorio.iepafontededeus.com.br/06-08-2023/#filhomulher^Pastor revela que Deus vai dar uma criança para a mulher.^revelação, revelacao, revelaçao, filho, gravidez, perus";
s[31] = "Revelação de emprego de fiscal de loja (Perus 06/08/2023)^https://diretorio.iepafontededeus.com.br/06-08-2023/#empregofiscal^Pastor revela que Deus vai dar um emprego de fiscal de loja.^revelação, revelacao, revelaçao, emprego, fiscal, loja, perus";
s[32] = "Revelação que Deus irá parar o choro^https://diretorio.iepafontededeus.com.br/06-08-2023/#pararchoro^Pastor revela que Deus vai para o choro de uma mulher.^revelação, revelacao, revelaçao, choro, parar, perus";
s[33] = "Testemunho aposentadoria, justiça deu a sentença (Recanto 07/08/2023)^https://diretorio.iepafontededeus.com.br/07-08-2023/#aposentadoria^Irmã esperava a um ano a resposta de um processo na justiça sobre a aposentadoria, Deus deu a vitória a ela e saiu a sentença.^testemunho, aposentadoria, sentença, sentenca, sentensa, recanto";
s[34] = "Testemunho Irmã Thais livramento de morte (Perus 08/08/2023)^https://diretorio.iepafontededeus.com.br/08-08-2023/#irmathais^Testemunho irmã Thais, que estava a beira da morte, e ficou 9 dias na UTI, ela precisava fazer cesárea pra salvar o bebê, e que ela teve uma hemorragia e que precisava abrir o utero novamente para retirar o utero e as trompas.^testemunho, gravidez, livramento, morte, perus, tais";
s[35] = "Revelação mulher irá voltar para o marido (Perus 08/08/2023)^https://diretorio.iepafontededeus.com.br/08-08-2023/#mulhervoltar^Pastor revelou que mulher irá voltar para o homem.^revelação, revelacao, revelaçao, esposa, marido, amor, perus";
s[36] = "Revelação de dinheiro na conta (Perus 08/08/2023)^https://diretorio.iepafontededeus.com.br/08-08-2023/#dinheiroconta^Pastor revelou que empresa irá depositar dinheiro na conta de um homem, e que isto é de Deus.^revelação, revelacao, revelaçao, dinheiro, conta, banco, empresa, perus";
s[37] = "Revelação livramento de prisão (Perus 08/08/2023)^https://diretorio.iepafontededeus.com.br/08-08-2023/#livramentoprisao^Pastor revelou que Deus está livrando um homem da prisão.^revelação, revelacao, revelaçao, livramento, prisão, perus";
s[38] = "Cultos Sexta-Feira dia 11/08/2023 (Canta Galo, Perus)^https://diretorio.iepafontededeus.com.br/11-08-2023/^Videos dos cultos do dia 11 de agosto de 2023 (Sexta-Feira) (Canta Galo, Perus) (1 elo campanha Chave da Vitória)^cultos, culto, sexta, sexta-feira, sexta feira, canta galo, perus, campanha, agosto, 2023";
s[39] = "Testemunho do estúdio Irmã Cris, 1 elo Chave da Vitória (Perus 11/08/2023)^https://diretorio.iepafontededeus.com.br/11-08-2023/#estudiocris^Irmã Cris conta que Deus deu a ela seu próprio estúdio.^testemunho, estudio, campanha, perus, vitoria, chave";
s[40] = "Testemunho da Irmã Daiana, bebê não tinha batimentos cardiacos, 1 elo Chave da Vitória (Perus 11/08/2023)^https://diretorio.iepafontededeus.com.br/11-08-2023/#bebedaiana^Testemunho da Irmã Daiana que o bebê dela não tinha batimentos cardiacos.^testemunho, cura, campanha, perus";
s[41] = "Testemunho do Irmão Clécio de seu mercadinho, 1 elo Chave da Vitória (Perus 11/08/2023)^https://diretorio.iepafontededeus.com.br/11-08-2023/#cleciomercado^Testemunho do Irmão Clécio, Deus deu um mercado para ele^testemunho, mercado, chave, campanha, perus";
s[42] = "Cultos Sábado dia 12/08/2023 (Canta Galo, Rincão, Recanto, Perus)^https://diretorio.iepafontededeus.com.br/12-08-2023/^Videos dos cultos do dia 12 de agosto de 2023 (Sábado) (Canta Galo, Rincão, Recanto, Perus) (Santa Ceia)^cultos, culto, sabado, canta galo, rincao, recanto, perus, ceia";
s[43] = "Testemunho de emprego no SBT (Rincão 12/08/2023)^https://diretorio.iepafontededeus.com.br/12-08-2023/#trabalhosbt^Testemunho da Irmã que tinha o sonho de trabalhar no SBT.^emprego, sbt, tv, televisão, televisao, testemunho, rincão, rincao, tarde da benção, tarde da bencão, tarde da bencao";
s[44] = "Cultos Quarta-Feira dia 16/08/2023 (Rincão)^https://diretorio.iepafontededeus.com.br/16-08-2023^Videos dos cultos do dia 16 de agosto de 2023 (Quarta-Feira) (Rincão)^cultos, culto, quarta, quarta-feira, quarta feira, rincão, rincao, agosto, 2023";
s[45] = "Testemunho Irmã concorreu com 12 pessoas (Rincão 16/08/2023)^https://diretorio.iepafontededeus.com.br/16-08-2023^Testemunho, irmã concorreu com 12 pessoas e ficou em terceiro lugar, mas os dois desistiram e o cargo ficou para ela.^testemunho, emprego, desistir, desistiram, vaga, rincao, rincão";
s[46] = "Cultos Quarta-Feira dia 30/08/2023 (Rincão)^https://diretorio.iepafontededeus.com.br/30-08-2023^Videos dos cultos do dia 30 de agosto de 2023 (Quarta-Feira) (Rincão)^cultos, culto, quarta, quarta-feira, quarta feira, rincão, rincao, agosto, 2023";
s[47] = "Testemunho do jogador mirim sobre empresário^https://diretorio.iepafontededeus.com.br/30-08-2023/#jogadormirim^Jogador Mirim dá o testemunho na fila que Deus abriu as portas para ele, e que o empresário já chamou.^testemunho, jogador, futebol, empresario, empresário, rincao, rincão";

// ---------- end of script properties and sites ----------


var cookies = document.cookie;
var p = cookies.indexOf("d=");

if (p != -1) {
	var st = p + 2;
	var en = cookies.indexOf(";", st);
	if (en == -1) {
		en = cookies.length;
	}
	var d = cookies.substring(st, en);
	d = unescape(d);
}
var od = d;
var m = 0;
if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"') {
	m = 1;
}

var r = new Array();
var co = 0;

if (m == 0) {
	var woin = new Array();
	var w = d.split(" ");
	for (var a = 0; a < w.length; a++) {
		woin[a] = 0;
		if (w[a].charAt(0) == '-') {
			woin[a] = 1;
		}
	}
	for (var a = 0; a < w.length; a++) {
		w[a] = w[a].replace(/^\-|^\+/gi, "");
	}
	a = 0;
	for (var c = 0; c < s.length; c++) {
		pa = 0;
		nh = 0;
		for (var i = 0; i < woin.length; i++) {
			if (woin[i] == 0) {
				nh++;
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa++;
				} else {
					pa = 0;
				}
			}
			if (woin[i] == 1) {
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa = 0;
				}
			}
		}
		if (pa == nh) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;
}

if (m == 1) {
	d = d.replace(/"/gi, "");
	var a = 0;
	var pat = new RegExp(d, "i");
	for (var c = 0; c < s.length; c++) {
		var rn = s[c].search(pat);
		if (rn >= 0) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;

}


function return_query() {
	document.jse_Form.d.value = od;
}

function num_jse() {
	document.write(co);
}

function out_jse() {
	if (co == 0) {
		document.write('Sua pesquisa não corresponde com nenhum documento.<p>Tenha certeza que todas as palavras estejam escritas corretamente.<br>Tente palavras-chaves diferentes ou mais gerais.');
		return;
	}
	for (var a = 0; a < r.length; a++) {
		var os = r[a].split("^");
		if (bold == 1 && m == 1) {
			var br = "<b>" + d + "</b>";
			os[2] = os[2].replace(pat, br);
		}
		if (include_num == 1) {
			document.write(a + 1, '. <a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		} else {
			document.write('<a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		}
	}

}
